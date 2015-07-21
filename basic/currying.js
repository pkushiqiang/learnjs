function out(a) {
	var outter = arguments.callee;
	var tmp = " + tmp"
	return function (b) {
		console.log(a+b+tmp, this);
		console.log(a+b , arguments.callee);
		console.log(a+b , outter);
		return outter;
	};
}

var f1 = out("s");
var f2 = out("t");
var o1 = f1(" r");
var o2 = f2(" r");

console.log( o1===o2);