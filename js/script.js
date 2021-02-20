var h = document.querySelectorAll('.panel-title');
var ancre = document.querySelectorAll('.ancre');

h.forEach(function(ht) {
	ht.addEventListener('click', deploier);
});

function deploier(e) {
	if (e.target.classList.contains('ancre')) {
		ancre.forEach(function(anc) {
			anc.firstElementChild.classList.add('glyphicon-chevron-right');
			anc.setAttribute('title', 'click to see infos');
			anc.firstElementChild.classList.remove('glyphicon-chevron-down');
		});
	}
	else {
		ancre.forEach(function(anc) {
			anc.setAttribute('title', '');
		});
		e.target.firstElementChild.classList.toggle('glyphicon-chevron-down');
	}
}
