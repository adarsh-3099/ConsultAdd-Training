// Hoisting - JS by default keeps var declaration at the top. This property is called Hoisting.
x = 5;
var x;

/* Closure - Closure means that an inner function always has access to the vars and parameters 
of its outer function, even after the outer function has returned. */
function OuterFunction() {
    var outerVariable = 100;
    function InnerFunction() {
        console.log(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc(); 

/* Async Await - It is used when we need to make asynchronous work. With the help of async await. It works Synchronously */
const getData = async() => {
	var data = "Hello World";
	return data;
}

getData().then(data => console.log(data));
