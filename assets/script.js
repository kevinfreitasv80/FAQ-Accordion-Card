var itemsFlex = document.querySelectorAll(".itemsFlex");
var hr1 = document.querySelectorAll(".hr1");
var hr2 = document.querySelectorAll(".hr2");
var h2 = document.querySelectorAll("h2");
var p = document.querySelectorAll("p");
var arrowDown = document.querySelectorAll(".itemsFlex img");

for (var i = 0; i < itemsFlex.length; i++) {
  (function(index) {
    itemsFlex[index].addEventListener("click", function() {
      if (h2[index].style.fontWeight === "700") {
        h2[index].style.fontWeight = "400";
        p[index].style.display = "none";
        hr1[index].style.display = "block";
        hr2[index].style.display = "none";
        arrowDown[index].style.rotate = "0deg";
    } else {
        h2[index].style.fontWeight = "700";
        p[index].style.display = "block";
        hr1[index].style.display = "none";
        hr2[index].style.display = "block";
        arrowDown[index].style.rotate = "180deg";
      }
    });
  })(i);
}