'use strict';
const templates = {
  articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML)
}

function clickHandler(event) {

    event.preventDefault();
    const clickedElement = this;
    const activeLinks = document.querySelectorAll('.list a.active');
    const activeGalleries = document.querySelectorAll(optArticleSelector)
    const linkAttribute = clickedElement.getAttribute('href');
    const targetGallery = document.querySelector(linkAttribute)
    const links = document.querySelectorAll(optTitleListSelector);

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
    optArticleTagsSelector = '.post-tags .list',
    optTagsListSelector = '.tags.list',
    optAuthorSelector = '.list.authors';

function generateTitleLinks(customSelector = ''){

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    let html = '';

    for(let article of articles){
        const articleId = article.getAttribute('id')
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        const linkHTMLData = {id: articleId, title: articleTitle};
        const linkHTML = templates.articleLink(linkHTMLData);
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


function calculateTagsParams(tags){
  const tagsParamsObj = {max: 0, min: 99999};
for(let tag in tags){
  if(tags[tag] > tagsParamsObj.max){
    tagsParamsObj.max = tags[tag]
  }
  else if(tags[tag] < tagsParamsObj.min){
    tagsParamsObj.min = tags[tag]
  }
}
  return tagsParamsObj
}



  function generateTags(){
    const articles = document.querySelectorAll(optArticleSelector);
    let allTags = {};

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
             if(!allTags.hasOwnProperty(oneTag)){
              allTags[oneTag] = 1;
             } else {
              allTags[oneTag]++;
             }
        } 
        tagsWrapper.innerHTML = html;
    }
    const tagList = document.querySelector(optTagsListSelector);
  
    let allTagsHtml = '';

    const tagsParams = calculateTagsParams(allTags);

    for(let tag in allTags){
      allTagsHtml += '<li><a class="list-group-item list-group-item-action list-group-item-secondary" href="#tag-' + tag + '">' + tag + ' ' + '(' + allTags[tag] + ')</a></li>';
    }
    tagList.innerHTML = allTagsHtml;
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
  const optArticleAuthorSelector = '.post .post-author';


  function generateAuthors(){

    const allAuthors = {}
    const articles = document.querySelectorAll(optArticleSelector);
    
    for(let article of articles){
  
        const authorWrapper = article.querySelector('.post-author');
        let html = '';

        const authorAttribute = article.getAttribute('data-author');
        const htmlElement = '<a href="#author-' + authorAttribute + '">' + authorAttribute + '</a>'
        if(!allAuthors.hasOwnProperty(authorAttribute)){
        
          allAuthors[authorAttribute] = 1;
        }
        else{
          allAuthors[authorAttribute]++
        }
        html = html + htmlElement;
        authorWrapper.innerHTML = html;
        } 
    const authorList = document.querySelector(optAuthorSelector);

    let allAuthorsHTML = ''
    for(let author in allAuthors){
       allAuthorsHTML += '<a class="list-group-item list-group-item-action list-group-item-secondary" href="#author-' + author + '"><span>' + author + ' (' + allAuthors[author] + ') ';
    }
  authorList.innerHTML = allAuthorsHTML
 }
 
 generateAuthors();

 function authorClickHandler(event) {

    event.preventDefault();
    console.log(event.preventDefault);
    const clickedElement = this;
    console.log(clickedElement);
    const href = clickedElement.getAttribute('href');
    const author = href.replace('#author-', ''); 
    const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

    for (let acvtiveAuthor of activeAuthors) {
        acvtiveAuthor.classList.remove('active');
    }

    const hrefAuthors = document.querySelectorAll('a[href="' + href + '"]'); 
    console.log(hrefAuthors);

    for (let hrefAuthor of hrefAuthors) {
        hrefAuthor.classList.add('active');
  }

    generateTitleLinks('[data-author="' + author + '"]');
    console.log(generateTitleLinks);
}

function addClickListenersToAuthors(){
   const allAuthorLinks = document.querySelectorAll('a[href^="#author-"]'); 
 
   for (let authorLink of allAuthorLinks){
        authorLink.addEventListener('click', authorClickHandler);
    }
}
addClickListenersToAuthors();
console.log(addClickListenersToAuthors);


   
    
const tplHelloSource = document.querySelector('#template-hello').innerHTML;
const tplHello = Handlebars.compile(tplHelloSource)
const dataHello = {firstName: 'John', lastName: 'Smith'};
let generatedHTML = tplHello(dataHello);

const targetElement = document.body;
targetElement.insertAdjacentHTML('beforeend', generatedHTML);
