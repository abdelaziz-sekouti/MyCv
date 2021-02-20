var h = document.querySelectorAll('.panel-title');
var ancre = document.querySelectorAll('.ancre');

ancre.forEach(function(ht) {
	ht.addEventListener('click', deploier);
});

function deploier(e) {
	if (e.target.firstElementChild.classList.contains('glyphicon-chevron-right')) {
		ancre.forEach(function(anc) {
			anc.firstElementChild.classList.add('glyphicon-chevron-right');
			anc.firstElementChild.classList.remove('glyphicon-chevron-down');
		});
	}
	else {
		e.target.firstElementChild.classList.toggle('glyphicon-chevron-down');
	}
}
