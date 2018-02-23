import Lodash from 'lodash'

function component() {
	var element = document.createElement('div');

	element.innerHTML = Lodash.join(['Hello','Webpack','!!!'],' ');
	return element;
}

document.body.appendChild(component());
