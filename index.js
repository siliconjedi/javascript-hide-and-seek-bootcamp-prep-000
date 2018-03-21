function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var nestedHolder = document.querySelector("#nested");
  return nestedHolder.querySelector(".target");
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll(".ranked-list li");
  
}