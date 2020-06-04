"use strict";

let termTemplate = document.querySelector('#term').content.querySelector('.term__item');
let htmlList = document.querySelector('.html .term__list');

// Шаблонизация
function cloneTerms() {
  for (let i = 0; i < htmlTerms.length; i++) {
    let termItem = termTemplate.cloneNode(true);
    termItem.children[0].textContent = htmlTerms[i].title;
    termItem.children[0].insertAdjacentHTML("beforeend", `<div class="filter"></div>`);
    htmlList.appendChild(termItem);
    determineType(i, termItem);
  }
}

let filterList = document.querySelector('#term').content.querySelector('.filter');
let filterItem = document.querySelector('.filter__item');

// Расставляем классы для фильтров, берем в свойстве category массив из классов, которые нужно задать фильтру
function determineType(i, termItem) {

  if (htmlTerms[i].category) {

    for (let j = 0; j < htmlTerms[i].category.length; j++) {
      termItem.children[0].children[0].insertAdjacentHTML("beforeend", `<div class="filter__item ${htmlTerms[i].category[j]}">  </div>`);
    }

  }

}
cloneTerms();

