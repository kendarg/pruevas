// const Prebtn = document.querySelector(".pre-btn"),
//       Nextbtn = document.querySelector(".next-btn"),
//       Pslider = document.querySelector("#Pslider"),
//       sliderDiv = document.querySelectorAll(".trancicion");
// // console.log(sliderDiv)
// Prebtn.addEventListener("click", e => moveToPre())
// Nextbtn.addEventListener("click", e => moveToNext())
// function moveToNext(){
//     Pslider.style.transform = "translate(-100%)"

// }
// function moveToPre(){

// }

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
