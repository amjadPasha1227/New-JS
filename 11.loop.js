let x = 3;
x++;
console.log(x);

/*1. for loop
 syntax:
 for(initializer; condition; increment/decrement){
    code to be executed
}
*/

//////////////////////////////////////

/* 

0 <
1 <=

i++ is similar to i = i + 1;

*/

/////////////////////////////////////



for(let i=1; i<=3; i++){
    console.log("Increment Value " + i);
}

/*2. whie loop
 syntax:
 initializer
 while(condition){
    code to be executed

    increment/decrement
 }
*/
let i=1;
while(i<=3){
    console.log("Increment Value " + i);

    i++;
}
/*3. do whie loop
 syntax:
 initializer
 do{
    code to be executed

    increment/decrement
 }while(condition)
*/
let j=1;
do{
    console.log("Increment Value " + j);
    j++;
}
while (j<=3);

/*4. for of
 syntax:
 for (variable of iterable) {
  statement
}
*/
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}




