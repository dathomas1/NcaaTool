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
	var adjDiv = document.createElement("div");
	adjDiv.setAttribute("class", "adjustment accordion");
	adjDiv.setAttribute("id", "adjustment_" + i);
	var adjHeader = document.createElement("h3");
	adjHeader.innerHTML = "Adjustment " + i;
	var filterHeader = document.createElement("h4");
	filterHeader.innerHTML = "Filter";
	var filterDiv = document.createElement("div");
	filterDiv.setAttribute("class", "filter accordion");
	var positionHeader = document.createElement("h5");
	positionHeader.innerHTML = "Position";
	var positionDiv = document.createElement("div");
	//positionDiv.setAttribute("class", "position accordion");

	positionDiv.innerHTML = "testContent";
	var positionLegend = document.createElement("legend");
	positionLegend.innerHTML = "Backs and Receivers:";
	var backFieldset = document.createElement("fieldset");



	document.getElementById("modForm").appendChild(adjHeader);
	document.getElementById("modForm").appendChild(adjDiv);
	adjDiv.appendChild(filterHeader);
	adjDiv.appendChild(filterDiv);
	filterDiv.appendChild(positionHeader);
	filterDiv.appendChild(positionDiv);
	positionDiv.appendChild(positionLegend);
	positionDiv.appendChild(backFieldset);

	i += 1;
	refreshAccordion();

};

$(document).ready(function() {
	$( ".accordion" ).accordion({
		collapsible: true,
		heightStyle: "content"
	});
});

//Partially added new elements in jQuery. New elements are not functional
function refreshAccordion () {
	$( ".accordion").each(function() {
		$(this).accordion().accordion("refresh");
	});
};


/*for (adj in mod.adjustments) {
	mod.adjustments[adj].filter;
	mod.adjustments[adj].edit;

};




	

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


});*/