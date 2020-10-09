function myFunction() {
	
	var tests = document.getElementById('top-navbar').getElementsByClassName('top-navbar-menu');


	for(var i = 0; i < tests.length; i++) {
		console.log(tests[i]);
		tests[i].classList.toggle("show");
	}
}


$(function() {

	// Custom JS





});
