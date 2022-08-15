// Variable allocation will do at exeucution time
console.log(a); // undefined if var // get error if let and const
var a;
console.log(a);
a = 5;
console.log(a);

// function total will save at creation time only

aahello();
function aahello(){
    console.log("hi");
}

//if we define function with variable we will get undefined

aahello();
var aahello = function(){
    console.log("hi");
}