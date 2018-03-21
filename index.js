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
    console.log(oldRank);
    ranks[i].innerHTML = oldRank + n;
  }
}

function deepestChild() {
  var q = document.querySelector("#grand-node");
  while (q) {
    q = q.querySelector("div");
  }
  return q.innerHTML;
}