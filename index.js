var sass = require('node-sass'),
	less = require('less'),
	fs = require('fs');

var css = fs.readFileSync('style.css').toString();


console.log('input', (css.length/1024).toFixed(2),'kb');
console.log('');

console.time('sass');
var sassOutput = sass.renderSync({
	data:css,
	outputStyle:'compressed'
});
console.timeEnd('sass');
console.log((sassOutput.css.toString().length/1024).toFixed(2), 'kb');



console.log('');
console.time('less');
less.render(css, {
	compress: true
}, function(e,output) {
	console.timeEnd('less');
	console.log((output.css.toString().length/1024).toFixed(2), 'kb');
});



console.log('');
console.time('ash');
var ash = fs.readFileSync('precomputed.css');
console.timeEnd('ash');
console.log((ash.toString().length/1024).toFixed(2),'kb');
