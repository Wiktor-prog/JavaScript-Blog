'use strict';

const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles',
optArticleTagsSelector = '.post-tags .list',
optArticleAuthorSelector = '.post-author',
optTagsListSelector = '.tags.list',
optCloudClassCount = 5,
optCloudClassPrefix = 'tag-size-';

  function generateTitleLinks(customSelector = ''){
    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
  
    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    let html = '';
    for(let article of articles){
    
    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* create HTML of the link */
    titleList.innerHTML = titleList.innerHTML + linkHTML;

    /* insert link into titleList */
    html = html + linkHTML;
    }
    const links = document.querySelectorAll('.titles a');
        for(let link of links){
        link.addEventListener('click', titleClickHandler);
  }
    }
  generateTitleLinks();





function titleClickHandler(event){
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */
    clickedElement.classList.add('active') 

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector)

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
    
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}





function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  
  /* START LOOP: for every article: */
  for (let article of articles){
    /* find tags wrapper */

    const titleList = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */

    let html = '';
    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray)
    /* START LOOP: for each tag */

    for(let tag of articleTagsArray){
      console.log('tag: ' ,tag);
      /* generate HTML of the link */

      const linkHTML = '<li><a href="#' + article + '"><span>' + tag + '</span></a></li>';
      /* add generated code to html variable */

      html = html + linkHTML + " ";
    /* END LOOP: for each tag */

    }
    /* insert HTML of all the links into the tags wrapper */
    titleList.innerHTML = html;
  /* END LOOP: for every article: */
  }
}
generateTags();


