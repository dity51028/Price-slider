const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress =document.querySelector(".slider .progress");

let priceGap = 1000;


priceInput.forEach(input =>{
    input.addEventListener("input",e=>{
        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);
         
        if((maxVal-minVal>=priceGap) && maxVal <= 10000){
            if(e.target.classname==="input-min")
            {
            rangeInput[0].value = minVal;
            progress.style.left = (minVal/rangeInput[0].max)*100+"%";
            }else{
            rangeInput[1].value = maxVal; 
            progress.style.right = 100-(maxVal/rangeInput[0].max)*100+"%";
            }

        }
       
    });
});


rangeInput.forEach(input =>{
    input.addEventListener("input",(e)=>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
         
        if(maxVal-minVal<priceGap){
            if(e.target.classname==="range-min")
            {
            rangeInput[0].value = maxVal-priceGap;
            }else{
            rangeInput[1].value = minVal+priceGap; 
            }

        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;

            progress.style.left = (minVal/rangeInput[0].max)*100+"%";
            progress.style.right = 100-(maxVal/rangeInput[0].max)*100+"%";
        }
       

        console.log(percent);
    });
});