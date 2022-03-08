let slide=document.getElementsByClassName('carousel-item')
let totalSlide=slide.length;
let slidePosition=0
let buttonTarget=document.getElementsByClassName('button-round')
let slidePrevious=document.getElementById('carousel-prev')
let slideNext=document.getElementById('carousel-next')

function slideHide()
{

    for(let s of slide)
    {
         s.classList.add('carousel-item-hidden')
         s.classList.remove('carousel-item-visible')
         buttonTarget[slidePosition].classList.remove('button-target')

     }
}

slidePrevious.addEventListener('click',function(){
    nextSlide()

})

slideNext.addEventListener('click',function(){
    slideHide()
    if(slidePosition==0)
    {
        slidePosition=totalSlide-1
    }
   else
     slidePosition--

     slide[slidePosition].classList.add('carousel-item-visible' )

})
function nextSlide()
{
    slideHide()
    if(slidePosition==totalSlide-1)
    {
        slidePosition=0
    }
   else
     slidePosition++
     slide[slidePosition].classList.add('carousel-item-visible')
     buttonTarget[slidePosition].classList.add('button-target')

}


 setInterval(nextSlide,5000)



