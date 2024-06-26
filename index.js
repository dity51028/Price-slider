const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress =document.querySelector(".slider .progress");

let priceGap = 1000;


rangeInput.forEach(input=>{
    input.addEventListener("input",e=>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if(maxVal- minVal < priceGap){
            if(e.target.classname === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
                progress.style.left = (minVal/rangeInput[0].max)*100 + "%";
            }else{
                rangeInput[1].value = maxVal + priceGap;
                progress.style.right = 100-(maxVal/rangeInput[1].max)*100 + "%";
            }
            
        }else{
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        
        }

    });
});