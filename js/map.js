var map = AmCharts.makeChart("chartdiv", {

	"type": "map",
    "theme": "dark",
    "pathToImages": "http://www.amcharts.com/lib/3/images/",

	"dataProvider": {
     "map": "worldLow",
		"getAreasFromMap": true
	},
	"areasSettings": {
		"autoZoom": true,
		"selectedColor": "#65bade"
	},
	"smallMap": {}
});