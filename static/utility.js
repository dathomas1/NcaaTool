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

for (adj in mod.adjustments) {
	mod.adjustments[adj].filter;
	mod.adjustments[adj].edit;

};


//Partially added new elements in jQuery. New elements are not functional
function refreshStyles () {
	$( ".accordion" ).accordion({
		collapsible: true,
		heightStyle: "content"
	});
}

$(document).ready(function() {
	refreshStyles();	

	$( ".addFilter" ).click(function() {
		console.log("addFilter Button clicked");
		let htmlFrag = $(".adv-filter-controlgroup").html();
		let $newdiv1 = $("<div class='adv-filter-controlgroup'>" + htmlFrag + "</div>")

		$( ".adv-filter-controlgroup" ).last().after($newdiv1);
		refreshStyles();
	});

	$( "#addAdjustment" ).click(function() {
		console.log("addAdjustment Button clicked");
		let htmlFrag = $(".adjustList").html();
		let $newdiv1 = $("<div class='adjustList accordion'>" + htmlFrag + "</div>")

		$( "#addAdjustment" ).after($newdiv1);
		refreshStyles();
	});


});