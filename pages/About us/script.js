let sliderRangeImg = document.querySelector(".team__slider");
let range = document.getElementById("myRange");

range.oninput = function(){
    if(range.value === "0"){
        sliderRangeImg.style.left = 0 + "px";
    }
    if(range.value === "1"){
        sliderRangeImg.style.left = -290 + "px";
    }
    if(range.value === "2"){
        sliderRangeImg.style.left = -580 +"px";
    }
    if(range.value === "3"){
        sliderRangeImg.style.left = -870 +"px";
    }
    if(range.value === "4"){
        sliderRangeImg.style.left = -1160 +"px";
    }
    if(range.value === "5"){
        sliderRangeImg.style.left = -1450 +"px";
    }
    if(range.value === "6"){
        sliderRangeImg.style.left = -1740 +"px";
    }
    if(range.value === "7"){
        sliderRangeImg.style.left = -2290 +"px";
    }
}