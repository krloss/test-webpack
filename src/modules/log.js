function lazyLoading() {
	var element = document.createElement('h1');

	element.innerHTML = 'Fim: '+ new Date();
	return element;
}

export default () => {
	document.body.appendChild(lazyLoading());
}
