// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";


var map = AmCharts.makeChart("chartdiv", {
    type: "map",
    creditsPosition:"top-right",
    theme: "light",
    dataProvider: {
        map: "worldLow",
        zoomLevel: 3.5,
        zoomLatitude: 37.1712,
        zoomLongitude: 127.1341,

        lines: [{
            latitudes: [37.1712, 41.4422], // Seoul to Chicago
            longitudes: [127.1341, -87.5367]
        }, {
            latitudes: [37.1712, 35.8888], // Seoul to Daegu
            longitudes: [127.1341, 128.5852]
        }, {
            latitudes: [35.8888, 35.1672], // Daegu to Busan
            longitudes: [128.5852, 129.0355] 
        }, {
            latitudes: [37.1712, 36.3388], // Seoul to Daejeon
            longitudes: [127.1341, 127.4052]
        }, {
            latitudes: [41.4422, 33.7448], // Chicago to Atlanta
            longitudes: [-87.5367, -84.3952]
        }, {
            latitudes: [41.4422, 43.6275], // Chicago to Wisconsin Dells
            longitudes: [-87.5367, -89.7752]
        }, {
            latitudes: [41.4422, 43.6532], // Chicago to Toronto
            longitudes: [-87.5367, -79.3832]
        }, {
            latitudes: [33.7448, 36.1128], // Atlanta to Las Vegas
            longitudes: [-84.3952, -113.9961]
        }, {
            latitudes: [36.1128, 34.0522], // Vegas to LA
            longitudes: [-113.9961, -118.2437]
        }, {
            latitudes: [33.7448, 33.5207], // ATL to Birmingham
            longitudes: [-84.3952, -86.8025]
        }, {
            latitudes: [33.7448, 28.5383], // ATL to Orlando
            longitudes: [-84.3952, -81.3792]
        }, {
            latitudes: [33.7448, 25.0480], // ATL to Nassau
            longitudes: [-84.3952, -77.3554]
        }, {
            latitudes: [33.7448, 40.7128], // ATL to NY
            longitudes: [-84.3952, -74.0059]
        }, {
            latitudes: [33.7448, -0.1807], // ATL to Quito
            longitudes: [-84.3952, -78.4678]
        }, {
            latitudes: [33.7448, 35.5951], // ATL to Asheville
            longitudes: [-84.3952, -82.5515]
        }, {
            latitudes: [33.7448, 42.3601], // ATL to Boston
            longitudes: [-84.3952, -71.0589]
        }, {
            latitudes: [42.3601, 43.6615], // Boston to Portland
            longitudes: [-71.0589, -70.2553]
        }, {
            latitudes: [42.3601, 42.8741], // Boston to Swanzey
            longitudes: [-71.0589, -72.2795]
        }, {
            latitudes: [33.7448, 32.0835], // ATL to Savannah
            longitudes: [-84.3952, -81.0998]
        }],
        images: [{
            id: "seoul",
            svgPath: targetSVG,
            title: "Seoul, South Korea",
            latitude: 37.1712,
            longitude: 127.1341,
            scale: 1
        }, {
            svgPath: targetSVG,
            title: "Chicago, IL",
            latitude: 41.4422,
            longitude: -87.5367,
            scale: 1
        }, {
            svgPath: targetSVG,
            title: "Daegu, South Korea",
            latitude: 35.8888,
            longitude: 128.5852,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Busan, South Korea",
            latitude: 35.1672,
            longitude: 129.0355,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Daejeon, South Korea",
            latitude: 36.3388,
            longitude: 127.4052,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Atlanta, GA",
            latitude: 33.7448,
            longitude: -84.3952,
            scale: 1
        }, {
            svgPath: targetSVG,
            title: "Wisconsin Dells, WI",
            latitude: 43.6275,
            longitude: -89.7752,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Las Vegas, NV",
            latitude: 36.1128,
            longitude: -113.9961,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Los Angeles, CA",
            latitude: 34.0522,
            longitude: -118.2437,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Nassau, Bahamas",
            latitude: 25.0480,
            longitude: -77.3554,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Birmingham, AL",
            latitude: 33.5207,
            longitude: -86.8025,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Orlando, FL",
            latitude: 28.5383,
            longitude: -81.3792,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "New York City, NY",
            latitude: 40.7128,
            longitude: -74.0059,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Quito, Ecuador",
            latitude: -0.1807,
            longitude: -78.4678,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Asheville, NC",
            latitude: 35.5951,
            longitude: -82.5515,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Toronto, Canada",
            latitude: 43.6532,
            longitude: -79.3832,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Boston, MA",
            latitude: 42.3601,
            longitude: -71.0589,
            scale: 1
        }, {
            svgPath: targetSVG,
            title: "Portland, ME",
            latitude: 43.6615,
            longitude: -70.2553,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Swanzey, NH",
            latitude: 42.8741,
            longitude: -72.2795,
            scale: 0.5
        }, {
            svgPath: targetSVG,
            title: "Savannah, GA",
            latitude: 32.0835,
            longitude: -81.0998,
            scale: 0.5
        }]
    },
     
    areasSettings: {
      unlistedAreasColor: "#267cdf"
    },
     
    imagesSettings: {
        color: "#CC0000",
        rollOverColor: "#FFFFFF",
        selectedColor: "#000000"
    },

    linesSettings: {
        arc: -0.7, // curve lines
        arrow: "middle",
        color: "#5c646a",
        alpha: 0.4,
        arrowAlpha: 1,
        arrowSize: 4
    },

    backgroundZoomsToTop: true,
    linesAboveImages: true
});

jQuery('.chart-input').off().on('input change',function() {
	var property	= jQuery(this).data('property');
	var target		= map.linesSettings;
  target[property] = this.value; 
	map.validateNow();
});