/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments which could be applied to the vignettes */

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story' and 'features' elements
var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

// Main 'header' element
var header = document.createElement('div');

// If the content exists, assign it to the 'header' element
if (config.toptitle) {
    var toptitle = document.createElement('p');
    toptitle.innerHTML = config.toptitle;
    header.appendChild(toptitle);
}
if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}
if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.classList.add("byline");
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}
// if (config.quicklinks) {
//     var quicklinkText = document.createElement('p');
//     quicklinkText.classList.add("quicklink");
//     quicklinkText.innerHTML = config.quicklinks;
//     header.appendChild(quicklinkText);
// }
if (config.description) {
    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = config.description;
    header.appendChild(descriptionText);
}

// If the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
    /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
    var container = document.createElement('div');
    var chapter = document.createElement('div');
    chapter.setAttribute("class","chapter");
    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }
    // Creates the description for the vignette
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }
    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }
    // Creates the image credit for the vignette
    if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = record.imageCredit;
        chapter.appendChild(imageCredit);
    }
    // Creates the legend for the map layer
    if (record.chapterLegend) {
      var legend = record.chapterLegend.legend;
      var legendElement =  document.createElement('div');
      legendElement.className = 'legend-overlay';
      legendElement.id = 'legend';
      var title = document.createElement('h4');
      title.innerText = legend.title;
      legendElement.appendChild(title);
      if ("extraLegend" in record.chapterLegend) {
        var legendDiv = document.createElement('div');
        var legendItem = document.createElement('span');
        legendItem.className = 'legend-item';
        legendItem.style.backgroundColor = record.chapterLegend.extraLegend["trace-color"];

        var value = document.createElement('span');
        value.innerHTML = `${record.chapterLegend.extraLegend.label}`;
        legendDiv.appendChild(legendItem);
        legendDiv.appendChild(value);
        legendElement.appendChild(legendDiv);
      }
      if (record.chapterLegend.type == "choropleth"){
        if (legend.colors.length == legend.breaks.length) {
          // add legend-items
          for (let i = 0; i < legend.colors.length; i++) {
            var legendDiv = document.createElement('div');
            var legendItem = document.createElement('span');
            legendItem.className = 'legend-item';
            legendItem.style.backgroundColor = legend.colors[i];

            var value = document.createElement('span');
            value.innerHTML = `${legend.breaks[i].toLocaleString("en-US")}`;
            legendDiv.appendChild(legendItem);
            legendDiv.appendChild(value);
            legendElement.appendChild(legendDiv);
          }
        }
      }
      if (record.chapterLegend.type == "bubble") {
        if (legend.sizes.length == legend.breaks.length) {
          // add legend-items
          for (let i = 0; i < legend.sizes.length; i++) {
            var legendDiv = document.createElement('div');
            legendDiv.style.float = "left";
            var legendItem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            legendItem.setAttribute("height", 40);
            legendItem.setAttribute("width", 40);

            var bubble = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            bubble.setAttribute("fill", legend.color);
            bubble.setAttribute("cx", 20);
            bubble.setAttribute("cy", 20);
            bubble.setAttribute("r", legend.sizes[i]);
            legendItem.appendChild(bubble);

            var value = document.createElement('span');
            value.innerHTML = `${legend.breaks[i].toLocaleString("en-US")}`;
            value.style.paddingLeft = "5px";
            value.style.marginBottom = "15px";
            legendDiv.appendChild(legendItem);
            legendDiv.append(value);
            legendElement.appendChild(legendDiv);
          }
        }
      }



      record['legendElement'] = legendElement;
    }
    // Sets the id for the vignette and adds the step css attribute
    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
    // Sets the overall theme to the chapter element
    chapter.classList.add(config.theme);
    /* Appends the chapter to the container element and the container
    element to the features element */
    container.appendChild(chapter);
    features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

/* This section creates the map element with the
attributes from the main section of the config.js file */

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
    // This is the function that finds the first symbol layer
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }

    // Setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
            if ("legendElement" in chapter) {
              document.body.appendChild(chapter.legendElement);
            }
            else {
              console.log("yo.");
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
            if (document.getElementById('legend')) {
              document.body.removeChild(document.getElementById('legend'));
            }

        });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener('resize', scroller.resize);
