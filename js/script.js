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
	console.log(e.target.parentElement.parentElement.nextElementSibling.className);
	ancre.forEach(function(anc) {
		//reset chevron right class to all span ancre's child
		anc.firstElementChild.className = 'glyphicon glyphicon-triangle-right';
		// check if collapsed div is collapse or not
		if (e.target.parentElement.parentElement.nextElementSibling.classList.contains('in')) {
			//div not collapse then affect chevron right to span
			e.target.firstElementChild.className = 'glyphicon glyphicon-triangle-right';
		}
		else {
			//div  collapsed then affect chevron down to span
			e.target.firstElementChild.className = 'glyphicon glyphicon-triangle-bottom';
		}
	});
}
