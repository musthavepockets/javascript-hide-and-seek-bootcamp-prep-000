function getFirstSelector(selector) {
  return document.querySelector(selector);
} 


function nestedTarget() {
  var nested = document.getElementById('#nested');
  var getIt = nested.children[2];
  return getIt;
}


function deepestChild() {
  let current = document.querySelector('#grand-node');
  let next = current.children[0];
  while (next) {
    current = next;
    next = current.children[0];
      }
      return current;
  }



function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li'); 
  for (i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML,10) + parseInt(n, 10);
  }
}