// 1st type
// const names = ["Noman", "Suhan"];

// //2nd type
// const numbers = [];
// numbers[0] = "one"
// numbers[1] = "two"

// //3rd type
// const items = new Array("item1", "item2", "item3");

// console.log(names);
// console.log(numbers);
// console.log(items);


// console.log(names[0]);


// //
// const names1 = ["Amjad", "Mahammad"]
// console.log(names1[0]);
// const namesObj = {firstName:"Amjad", lastName:"Mahammad"}
// console.log(namesObj.firstName);
// console.log(namesObj["firstName"]);
// console.log(typeof(names1));
// console.log(typeof(namesObj));

// console.log(Array.isArray(names1));
// console.log(Array.isArray(namesObj));

// const anyData = ["Mahammad",2, 5, 8, 1, "Amjad", 7, 9];
// console.log(anyData.length);
// //console.log(anyData.sort());
// console.log(anyData[anyData.length - 1]);

// for (i=0; i<anyData.length; i++){
//     console.log("index " + i);
//     console.log(anyData[i]);
// }


// anyData.push(6)
// console.log(anyData)
// anyData.pop()
// console.log(anyData)
// anyData[anyData.length] = 11;
// console.log(anyData)
// console.log(Array.isArray(anyData));
// console.log(anyData instanceof Array);

// Array Methods

// transform to string:  toString, join
// mutate array: pop, push, shift, unshift, delete, splice
// create new array: concat, slice
// pop - remove last item (reverse) shift - remove first item
// push - add item to array at last (reverse) unshift: add to first place
// const newItems = ["item1", "item2", "item3"];
// console.log(newItems.toString());
// console.log(newItems.join());
// console.log(newItems.reverse());

// const numbers = [5, 2, 1, 6, 10, 4, 9]
// console.log(numbers.sort(
//     function(a, b){
//         return a - b;
//     }
// ))


// Sorting array With for Loop
// var input = [2,3,8,1,4,5,9,7,6];

//    var output = [];
//    var inserted;

//    for (var i = 0, ii = input.length ; i < ii ; i++){
//     inserted = false;
//     for (var j = 0, jj = output.length ; j < jj ; j++){
//       if (input[i] < output[j]){
//         inserted = true;
//         output.splice(j, 0, input[i]);
//         break;
//       }
//     }
    
//     if (!inserted)
//       output.push(input[i])
//   }

//   console.log(output);