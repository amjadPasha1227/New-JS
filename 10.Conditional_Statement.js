// Condtional Statements
// if
// else
// else if 
// switch
let number = 3;
if(number > 0){
    console.log("Positive Number");
}else if(number < 0){
    console.log("Negative Number");
}else{
    console.log("Zero");
}

const day = new Date().getDay();

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;      
    default:
        break;
}
