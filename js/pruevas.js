const  
        btnLeft =  document.querySelector(".btn-left"),
        btnRight =  document.querySelector(".btn-right"),
        slider = document.querySelector("#slider"),
        sliderSection = document.querySelectorAll(".slider-section");
btnLeft.addEventListener("click", e => moveToleft())
btnRight.addEventListener("click", e => moveToRight())
let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;




function moveToRight(){
    if(counter >= sliderSection.length-1){
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"
    } else{
        counter++;

    console.log(counter)
    operacion = operacion + widthImg
      slider.style.transform = `translate(-${operacion}%)`;
      slider.style.transition = "all ease .6s"
    }
    


}
 function moveToleft(){
     counter--;
     if(counter < 0){
         counter = sliderSection.length-1;
         operacion = widthImg * (sliderSection.length-1)
         slider.style.transform = `translate(-${operacion}%)`
         slider.style.transition = "none"

     }
     else{
        
           operacion = operacion - widthImg
           slider.style.transform = `translate(-${operacion}%)`
           slider.style.transition = "all ease .6s"
     }
 }


 const productContainers = [...document.querySelectorAll('.product-container')];
 const nxtBtn = [...document.querySelectorAll('.next-btn')];
 const preBtn = [...document.querySelectorAll('.pre-btn')];
 
 productContainers.forEach((item, i) => {
     let containerDimensions = item.getBoundingClientRect();
     let containerWidth = containerDimensions.width;
 
     nxtBtn[i].addEventListener('click', () => {
         item.scrollLeft += containerWidth;
     })
 
     preBtn[i].addEventListener('click', () => {
         item.scrollLeft -= containerWidth;
     })
 })
 