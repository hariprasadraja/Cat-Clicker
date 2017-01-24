var cat1_click = 1;
var cat2_click = 1;

// var elem = document.getElementById("cat");
//
// console.log(elem);
// elem.addEventListener('click', function(){
//   //the element has been clicked... do stuff here
//   i++;
//  conosle.log(i);
//
// }, false);

var Cat1 = document.getElementById("cat1");
var Cat2 = document.getElementById("cat2");
document.getElementById("cat1-name").innerHTML ="Kitty";
document.getElementById("cat2-name").innerHTML ="chokey";

Cat1.addEventListener('click',function(){
 document.getElementById("cat1-count").innerHTML= cat1_click++;

});

Cat2.addEventListener('click',function(){
  document.getElementById("cat2-count").innerHTML= cat2_click++;
});
