// You can concatenate/merge several arrays' content into a new array using the ... spread syntax. Here's an example:

const lat = [5.234];
const lng = [1.412];
const point = [...lat, ...lng];
console.log(point); // [5.234, 1.412];


///Here's another example where we create a new array based on the old one and add new items to it

const items = ["Tissues", "Oranges"];

const otherItems = [...items, "Tomatoes"];
console.log(otherItems); // ["Tissues", "Oranges", "Tomatoes"]