function footer() {
	var element = document.createElement('div');

	element.innerHTML = 'Fim: '+ new Date();
	return element;
}

document.body.appendChild(footer());
