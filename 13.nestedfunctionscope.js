function outer(){
    let myName = "Amjad";
    console.log(myName);
    function inner() {
        console.log(myName); // can access parent variable
    }
    inner();
}
outer(); //Amjad Amjad
inner(); // Error