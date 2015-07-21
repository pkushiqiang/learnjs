var a ;
console.log(" a=",a);

function a() {
	console.log("inner a=",a);
}
a(); 
console.log(" a=",a);


//---------------------

var b  ;
// var b=9;
function b() {
	console.log("inner b=", b);
}

console.log(" b=",b);
b();

b=9;
console.log(" b=",b);