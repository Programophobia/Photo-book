'use strict';

function clickHandler(event) {

    event.preventDefault();
    const clickedElement = this;
    const activeLinks = document.querySelectorAll('.list a.active');
    const activeGalleries = document.querySelectorAll('.post')
    
   const linkAttribute = clickedElement.getAttribute('href');
  

   const targetGallery = document.querySelector(linkAttribute)

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active')
    }

     clickedElement.classList.add('active')

    for(let activeGallery of activeGalleries){
        activeGallery.classList.remove('active')
    }
  
    targetGallery.classList.add('active')

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', clickHandler)
}