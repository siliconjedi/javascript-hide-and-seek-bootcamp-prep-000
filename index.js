function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var nestedHolder = document.querySelector("#nested");
  return nestedHolder.querySelector(".target");
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll(".ranked-list li");
  for (let i = 0; i < ranks.length; i++) {
    var oldRank = parseInt(ranks[i].innerHTML);
    ranks[i] = oldRank + n;
  }
}