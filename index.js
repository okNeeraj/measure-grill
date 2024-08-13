'use strict'
function a() {
	console.log(this)
	// const b = () => {
	// 	console.log(this)
	// }
	// b()
}

var x = 11;
a()
