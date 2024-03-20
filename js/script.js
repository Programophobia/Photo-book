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
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(customSelector = ''){

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
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

  function generateTags(){
    const articles = document.querySelectorAll(optArticleSelector);

    for(let article of articles){
        
        const tagsWrapper = article.querySelector(optArticleTagsSelector);
        console.log(tagsWrapper)
            
        let html = '';
            
        const tagAttribute = article.getAttribute('data-tags');
            
        const splitTag = tagAttribute.split(' ');
        console.log(splitTag)
        
        for(let oneTag of splitTag){
            
            const htmlElement = '<li><a href="#tag-' + oneTag + '">' + oneTag + '</a></li><br>'
            console.log(htmlElement)
                    
            html = htmlElement + html;
            
        }
        
    tagsWrapper.innerHTML = html;
    
    }
  }
  generateTags();


  function tagClickHandler(event){
  
    event.preventDefault();
    
    const clickedElement = this;
    const href = clickedElement.getAttribute('href');
    const tag = href.replace('#tag-', '');
    console.log(tag)
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
        
    for(let activeTagLink of activeTagLinks){
        activeTagLink.classList.remove('active');
    
    }
        
    const allTagsLinks = document.querySelectorAll('a[href="' + href + '"]');
    
    for(let tagLink of allTagsLinks){
        
        tagLink.classList.add('active');
    
    }
   
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }
  
function addClickListenersToTags(){
   
    const allTagLinks = document.querySelectorAll('a[href^="#tag-"]')
    
    for(let tagLink of allTagLinks){
        tagLink.addEventListener('click', tagClickHandler)
    }
      
  }
  
  addClickListenersToTags();

  function generateAuthors(){
    const articles = document.querySelectorAll(optArticleSelector);
    
    for(let article of articles){
  
        const authorWrapper = article.querySelector('.post-author');
        let html = '';
        const authorAttribute = article.getAttribute('data-author');
        const htmlElement = '<a href="#author-">' + authorAttribute + '</a>'
        html = html + htmlElement;
        authorWrapper.innerHTML = html;
        }
 }
 
 generateAuthors();