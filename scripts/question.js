$(document).ready(function(){
	//Load JSON from URL
	$.getJSON('https://spreadsheets.google.com/feeds/cells/1u3KkyIk5N69Te6th8jZ5aVd1GcCFDM0QXoM_8YEBaiQ/1/public/full?alt=json', function(results){
	//init var
	var rows = parseInt(results.feed.gs$rowCount.$t);
	var randomNum = Math.floor(Math.random() * (rows - 1) + 1); 

	//generate random number that does not correspond to data in columns 2 or 3
	while (results.feed.entry[randomNum].gs$cell.col !== "1"){
		randomNum = Math.floor(Math.random() * (rows - 1) + 1);
	}
	//Change HTML to the random question
	document.getElementById("question").innerHTML = results.feed.entry[randomNum].gs$cell.inputValue;
	});
});

