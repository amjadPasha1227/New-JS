function getProductDetails(){
    const product = {
        id: 1,
        title: 'Product 1',
        inStock: true
    }
    return product;
}

const product = {
    id: 1,
    title: 'Product 1',
    inStock: true
}

console.log(getProductDetails()); // with function call // for my reference only
console.log(product); // without function direct object call // for my reference only

function getWeather(city){
    return `It's currently ${city.value} degrees in ${city.name}`;
}

console.log(getWeather({name:'Hyderabad', value:30}));

const person = {
    firstName: 'Amjadpasha',
    lastName: 'Mahammad',
    age: 30
}

function incrementAge(person){
    person.age = person.age + 1;
    return person;
}

console.log(incrementAge(person));