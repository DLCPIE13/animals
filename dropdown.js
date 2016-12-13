function dropDown() {
	document.getElementById("mainDrop").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropDowns = document.getElementsByClassName("drop-content");
		var i;
		for (i=0; i < dropDowns.length; i++) {
			var openDropDown = dropDowns[i];
			if (openDropDown.classList.contains('show')) {
				openDropDown.classList.remove('show');
			}
		}
	}
}