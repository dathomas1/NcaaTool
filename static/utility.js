//Default player mod
var mod = {
	"name" : "default",
	"description" : "test run of mod",
	"adjustments" : [
		{
			"filter" : {
				"position" : "",
				"year" : "",
				"noRedshirt" : "",
				"teams" : "",
				"advance" : ""
			},
			"edit" : ["helmet=4","facemask=12"]
		},
		{
			"filter" : {
				"position" : "HB,FB",
				"year" : "FR",
				"noRedshirt" : "true",
				"teams" : "98",
				"advance" : ""
			},
			"edit" : ["injury-20"]
		}
	]
};

//Add new adjustment form fields
function addAdjustment(){
	var i = 1;


};

$(document).ready(function() {
	$( ".accordion" ).accordion({
		collapsible: true,
		heightStyle: "content"
	});
});


