import MainCSS from './main.css';
import Lodash from 'lodash';

function style() {
	var element = document.createElement('style');

	element.innerHTML = MainCSS;
	return element;
}
function component() {
	var element = document.createElement('div');

	element.innerHTML = Lodash.join(['Hello','Webpack','!!!'],' ');
	return element;
}

document.head.appendChild(style());
document.body.appendChild(component());

setTimeout(function() {
	const module = import(/* webpackChunkName:"log" */'./modules/log.js');

	module.then(log => {
		log.default();
	});
},3000);
