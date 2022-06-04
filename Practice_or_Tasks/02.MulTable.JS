// Reference link:https://www.codevscolor.com/javascript-print-multiplication-table

let TABLE_VALUE = document.getElementById("table_value"),
GET_TABLE_BTN = document.getElementById("getTable"),
TABLE_RESULT = document.getElementById("table_result");

GET_TABLE_BTN.addEventListener("click", function(){
    var result = "";
    for(var i=1; i<=10; i++){
        result = result + "<p>"+TABLE_VALUE.value + " * " + i + " = " + TABLE_VALUE.value * i+"</p>";
    }
    TABLE_RESULT.innerHTML = result;
})

