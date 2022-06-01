let SQRT_VALUE = document.getElementById("sqrt_value"),
CBRT_VALUE = document.getElementById("cbrt_value"),
SQRT_RESULT = document.getElementById("sqrt_result"),
CBRT_RESULT = document.getElementById("cbrt_result"),
SQR_VALUE = document.getElementById("sqr_value"),
CUB_VALUE = document.getElementById("cub_value"),
SQR_RESULT = document.getElementById("sqr_result"),
CUB_RESULT = document.getElementById("cub_result"),
ERR_MSG = document.getElementById("error_msg");

ERR_MSG.style.visibility = 'hidden';

SQR_VALUE.addEventListener("input", function(){
    if(!isNaN(SQR_VALUE.value)){
        ERR_MSG.style.visibility = 'hidden';
        return SQR_RESULT.innerHTML = SQR_VALUE.value * SQR_VALUE.value;
    }else{
        ERR_MSG.style.visibility = 'visible';
    }
});

CUB_VALUE.addEventListener("input", function(){
    CUB_RESULT.innerHTML = CUB_VALUE.value * CUB_VALUE.value * CUB_VALUE.value;
});

SQRT_VALUE.addEventListener("input", function(){
    SQRT_RESULT.innerHTML = Math.sqrt(SQRT_VALUE.value);
});

CBRT_VALUE.addEventListener("input", function(){
    CBRT_RESULT.innerHTML = Math.cbrt(CBRT_VALUE.value);
});