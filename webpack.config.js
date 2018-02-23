const path = require('path');

module.exports = {
	entry: {
		index:'./src/index.js',
		log:'./src/modules/log.js'
	},
	output: {
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist/js')
	},
	module: {
		rules: [
			{ test:/\.css$/, use:'css-loader' }
		]
	}
};
