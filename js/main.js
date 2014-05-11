$(function (){
	//load spreadsheet
	var mySpreadsheet = 'https://docs.google.com/spreadsheet/pub?key=0AgYVWMxsntVodGlNeS13M0V1dmFmakJENTlaMWoxV2c&single=true&gid=3';
	$('#freelancerslist').sheetrock({
		url: mySpreadsheet,
		chunkSize: 100,
		sql: 'select B,E,C,D,F,G order by A desc',
		userCallback: function() {
			links();
			twitter();
		}
	});


	// add boostrap style to table
	$('table').addClass('table table-striped table-hover');


	//add links
	function links() {
		var websiteEl = $('#freelancerslist td:nth-child(5)');
		websiteEl.each(function(index) {
			var link = $(this).text();
			console.log(link);
			$(this).wrapInner('<a target="_blank" href="'+ link +'" />');
		});	
	};

	//add links
	function twitter() {
		var twitterEl = $('#freelancerslist td:nth-child(6)');
		twitterEl.each(function(index) {
			var link = "http://twitter.com/"; //twitter url 
			var text = $(this).text();
				text = text.replace("@", "");
				console.log(text);
			link += text;
			$(this).wrapInner('<a target="_blank" href="'+ link +'" />');
		});	
	}


});

/*
var value = $("#text").val(); // value = 9.61 use $("#text").text() if you are not on select box...
value = value.replace(".", ":"); // value = 9:61
// can then use it as
$("#anothertext").val(value);
*/