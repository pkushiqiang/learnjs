var A = function(val) {
	this.val = val;	
} 

A.prototype.print = function() {
	console.log("attr val=", this.val);
}

var a = new A("hello");
a.print();