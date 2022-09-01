sectionOne = document.getElementById('section1')
sectionTwo = document.getElementById('sectionTwo')
const submitButton = document.querySelector('.submit')
const RateButton = document.querySelectorAll('.btn')
const RateNumber = document.querySelector('.RateNumber')
const Homebutton = document.querySelector('.home')

RateButton.forEach (
  btn  => {
     btn.addEventListener('click',() =>{
  
  RateNumber.innerText = btn.innerText
})
  
  }
) 

 submitButton.addEventListener('click',() => {
  if (RateNumber.innerText === '0') {
    alert('You have to Submit a rate')
  } else {
    sectionOne.style.display='none'
    sectionTwo.style.display = 'block'
  }
  
 }) 

 Homebutton.addEventListener('click',() => {
  sectionOne.style.display='flex'
  sectionTwo.style.display = 'none'
 })