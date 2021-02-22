//Select all ancre
var ancre = document.querySelectorAll('.ancre');
// loop through all ancre
ancre.forEach(function(anc) {
	anc.addEventListener('click', deploier);
	//stop event propagation to child
	anc.firstElementChild.addEventListener('click', function(e) {
		e.stopPropagation();
	});
});
//function to call when  ancre is clicked
function deploier(e) {
	ancre.forEach(function(anc) {
		anc.firstElementChild.className = 'glyphicon glyphicon-chevron-right';
	});
	e.target.firstElementChild.classList.toggle('glyphicon-chevron-down');
}
