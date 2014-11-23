/* Author: 

*/

$(document).ready(function() {

	if ($(".touch").length == 0) {
	
		$("#nav-main").hover(
		  function () {
		    $("#container").addClass("focus-main");
		  },
		  function () {
		    $("#container").removeClass("focus-main");
		  }
		);
		
		$("#nav-secondary").hover(
		  function () {
		    $("#container").addClass("focus-secondary");
		  },
		  function () {
		    $("#container").removeClass("focus-secondary");
		  }
		);
		
	}
	
	
});