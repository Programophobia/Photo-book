'use strict';

function clickHandler(event) {

    event.preventDefault();
    const clickedElement = this;
    const activeLinks = document.querySelectorAll('.list a.active');
    const activeGalleries = document.querySelectorAll(optArticleSelector)
    const linkAttribute = clickedElement.getAttribute('href');
    const targetGallery = document.querySelector(linkAttribute)
    const links = document.querySelectorAll(optTitleListSelector, 'a');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active')
    }

    clickedElement.classList.add('active')

    for(let activeGallery of activeGalleries){
        activeGallery.classList.remove('active')
    }
    targetGallery.classList.add('active')
}

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks(){

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';

    for(let article of articles){
        const articleId = article.getAttribute('id')
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

        const linkHTML = '<li><a class="list-group-item list-group-item-action list-group-item-secondary" href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        html = html + linkHTML
        titleList.innerHTML = html;   
    }

    const links = document.querySelectorAll('.titles a');
    console.log(links)

    for(let link of links){
        link.addEventListener('click', clickHandler)
    }
}
generateTitleLinks();


function printAbout(msg) {
    const paragrapf = document.createElement('a');
    paragrapf.innerHTML = msg;
    paragrapf.classList.add('link-Bolivia')
    document.getElementById('box-show').appendChild(paragrapf)
}

printAbout('CLICK FOR MORE')

 const linkBolivia = document.querySelector('.link-Bolivia');
 linkBolivia.setAttribute("href", "https://annapowaska.com/blog/bolivia/");
 linkBolivia.setAttribute("class", "list-group-item list-group-item-action list-group-item-secondary");
 linkBolivia.setAttribute("id", "link-Bolivia");
 linkBolivia.style.backgroundColor = "rgb(224 244 211)";
 linkBolivia.style.textAlign = "center";

 linkBolivia.setAttribute("onmouseover", "changeToBlueColor()");
 linkBolivia.setAttribute("onmouseout", "changeToBlueGreen()");
 const changeLink = document.getElementById("link-Bolivia");

 function changeToBlueColor(){
    changeLink.style.color = "green";
    changeLink.style.fontWeight = "bold"
  }

  function changeToBlueGreen(){
    changeLink.style.color = "black";
    changeLink.style.fontWeight = "lighter"
  }








