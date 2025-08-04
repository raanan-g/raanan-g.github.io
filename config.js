var config = {
    accessToken: 'pk.eyJ1IjoicmFhbmFuLWciLCJhIjoiY2pyMWF5YzM4MDBseTQzcXEyZ3gxN2xvOSJ9.Jm_gHZ3zcJh2xygKeOdr5w',
    style: 'mapbox://styles/raanan-g/cmdvxzr12003e01s71ic76br5',
    alignment: 'center',
    toptitle: '',
    title: "Driving Impact with Data and AI",
    byline: 'Digital Portfolio',
    quicklinks: '',
    description: '<a href="Raanan Resume.pdf" target="_blank"><button class="button-17">Resume&nbsp;<u>&#8681;</u></button></a><br><br><br><br><br><br><small>Keep scrolling for more About Me</small>',
    chapters: [
      // intro
      {
          id: 'intro',
          title: '',
          image: '',
          imageCredit: '',
          description: "I am a technologist based in Brooklyn, New York with deep expertise in data analytics, machine learning and artificial intelligence.<br><br>I am passionate about urbanism, environmental health, housing and food security and enjoy using technology to drive meaningful change in these areas and disciplines.",
          location: {
              center: [-73.961488, 40.671134],
              zoom: 15.31,
              pitch: 75.03,
              bearing: -40.61
          }
      },
      {
          id: 'parable',
          title: '',
          image: 'https://cdn.prod.website-files.com/6688d470267ea853b6660b67/683f3135e46ee656c55505c6_Logo_Parable.svg',
          imageCredit: '',
          description: "I currently work as a forward-deployed data scientist at <a href='https://askparable.com'>Parable</a>, where I help a range of business clients measure and analyze organizational time spent and develop highly informed and actionable AI implementation strategies.",
          location: {
            center: [-73.961488, 40.671134],
            zoom: 15.31,
            pitch: 75.03,
            bearing: -40.61
          }
      },
      // MusicMap
      {
        id: 'musicmap',
        title: '',
        image: 'musicmap-logo-dark.png',
        imageCredit: '',
        description: "In my spare time, I have been building <a href='https://musicmap.live'>MusicMap.live</a>, a fun app for exploring local music scenes, discovering new artists and finding live events to go to.",
        location: {
          center: [-73.961488, 40.671134],
          zoom: 15.31,
          pitch: 75.03,
          bearing: -40.61
        }
      },
      // BlueConduit
      {
          id: 'blueconduit',
          title: '',
          image: 'https://blueconduit.com/wp-content/uploads/2024/05/bg-logo-white-1.png.webp',
          imageCredit: '',
          description: "From 2020 to 2025, I worked as a data scientist at BlueConduit, where I developed machine learning software that helped accelerate removal of lead (Pb) water service pipes from over 70 communities around the country, with the support of <a href='https://blueconduit.com/bcxgoogle/' target='_blank'>Google.org</a>, the Rockefeller Foundation, Natural Resources Defense Council and Environmental Policy Innovation Center.",
          location: {
            center: [-73.961488, 40.671134],
            zoom: 15.31,
            pitch: 75.03,
            bearing: -40.61
          }
      },
      {
        id: 'trees',
        title: '',
        image: '',
        imageCredit: '<a href="https://raanangurewitsch.com/great-trees-of-new-york-map" target="_blank"><button class="button-17">Read Story Map</button></a>',
        description: "I love exploring the world through data driven story maps, like the Great Trees of New York Map, which I digitized to be able explore the popular list in my favorite medium.",
        location: {
          center: [-73.947830, 40.700528],
          zoom: 10.57,
          pitch: 54.85,
          bearing: 0
        },
        onChapterEnter: [{
          layer:'nyctrees-9c4lnh',
          visibility:'visible'
        }],
        onChapterExit: [{
            layer:'nyctrees-9c4lnh',
            visibility:'none'
        }],
    },
      // // PHDL
      // {
      //       id: 'phdl',
      //       title: '',
      //       image: 'cluster_results.gif',
      //       imageCredit: '',
      //       description: 'Before BlueConduit, I lived in Pittsburgh, PA and worked at the Public Health Dynamics Laboratory at the University of Pittsburgh School of Public Health.<br><br>My job included data collection and geospatial data analysis for environmental health research on lead in water, US mortality trends and the Opioid Crisis.<br>I recently created a <a href="https://geominr.github.io/appalachia-deaths-of-despair" target="_blank">story map</a> with data from the study.',
      //       location: {
      //         center: [-79.93842,40.44525],
      //         zoom: 13,
      //         pitch:40,
      //         bearing:-30
      //       }
      //   },
      // // Census
      // {
      //       id: '',
      //       title: '',
      //       image: '',
      //       imageCredit: '',
      //       description: 'After graduation, I joined the third cohort of the <a href="https://blog.codingitforward.com/alumni-spotlight-raanan-gurewitsch-cdf-19-19ea446b22b6" target="_blank">Civic Digital Fellowship</a> as a data scientist for the United States Census Bureau. For three months, I worked with other fellows in the Economic Surveys Division on geospatial data engineering and machine learning analysis.<br><br>The Fellowship was my introduction to the nationwide civic tech community, a network of engineers, designers, data scientists and product managers working in public service or social impact technology.',
      //       location: {
      //         center: [-76.981,38.888],
      //         zoom: 13.0,
      //         pitch:60,
      //         bearing:-50
      //       }
      //   },
      // // Thesis
      // {
      //       id: 'thesis',
      //       title: '',
      //       image: '',
      //       imageCredit: '',
      //       description: 'I graduated with my Bachelor of Philosophy in Information Science from the Univeristy of Pittsburgh in 2019, where I minored in Economics and participated in the Honors Community Based Research Fellowship.<br><br>My <a href="http://d-scholarship.pitt.edu/36505/" target="_blank">baccaulaureate thesis</a> focused on the application of machine learning to lead service line replacement in Pittsburgh.<br><br>My thesis has been cited by the American Water Works Association in 2020 and the State of New Jersey in 2022 when recommending methods for locating and replacing lead service lines.',
      //       location: {
      //         center: [-79.93842,40.44525],
      //         zoom: 13,
      //         pitch:40,
      //         bearing:-30
      //       }
      //   },
      // // Israel
      // {
      //       id: 'israel',
      //       title: '',
      //       image: 'israel.JPG',
      //       imageCredit: '',
      //       description: 'Another important chapter in my life was my gap year in Israel between high school and college. I spent 10 months in Tel Aviv and Jerusalem volunteering with the Magen David Adom ambulance service and studying Hebrew language and the history of the Israeli-Palestinian Conflict.',
      //       location: {
      //         center: [35.211,31.761],
      //         zoom: 9.0,
      //         pitch:60,
      //         bearing:-30
      //       }
      //   },
    ],
    usecases: [
      {
        id: "use-case-0",
        title:"Story Map: How the Infrastructure Bill Comes Up Short on Replacing Lead Water Pipes",
        description:"In this story map, I use data from across the US to show how states in the Midwest need more from the 2021 Infrastructure Bill.",
        link:"https://blueconduit.com/funding-lead-pipe-removal"
      },
      // {
      //   id: "use-case-1",
      //   title:"LeadOut: Find the status of lead pipes in your home",
      //   description:"BlueConduit's publicly searchable map of lead service line data, tailored to residents in under-resourced communities. I was the project lead for this product, which was built by members of the BlueConduit-Google.org Fellowship.",
      //   link:"https://leadout.blueconduit.com"
      // },
      {
        id: "use-case-2",
        title:"Mapping America's Water Service Area Boundaries",
        description:"A truly gargantuan effort across multiple organizations including BlueConduit, SimpleLab, EPIC and Georgetown Univeristy, to geolocate every public water system in the United States. My contribution has been the merging of auxiliary geospatial datasets to the national <a href='https://www.policyinnovation.org/technology/water-utility-service-area-boundaries' target='_blank'>water service area boundaries</a> file and creating interactive mapping tools to explore the data.",
        link:"https://blueconduit.github.io/nationwidemap"
      },
      {
        id: "use-case-3",
        title:"Toledo (OH) Water Service Line Map",
        description:"Launched in 2021, this live interactive map let’s residents of the City of Toledo (OH) search for their home in the city’s water service line inventory to see the status of their water service line.",
        link:"https://map.blueconduit.com/map"
      },
      {
        id: "use-case-4",
        title:"Mapping the Opioid Crisis in Appalachia",
        description:"Under Prof. Saumyadipta Pyne of the University of Pittsburgh, I studied the burden of mortality from deaths of despair: suicide, accidental overdose and alcohol-related deaths over the past four decades. ",
        link:"https://geominr.github.io/appalachia-deaths-of-despair"
      },
      {
        id: "use-case-5",
        title:"Mapping Pittsburgh’s Water Lead Levels",
        description:"Under Prof. Saumyadipta Pyne at the University of Pittsburgh, I studied the levels of toxic lead detected from voluntary tap water sampling in the City of Pittsburgh. ",
        link:"https://geominr.github.io/pgh-lead-levels"
      },
    ]
};
