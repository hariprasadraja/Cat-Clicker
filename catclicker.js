//  Copyright (C) 2017  Hariprasad  ALL RIGHTS RESERVED
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
//  MVC_CatClicker Copyright (C) 2017  Hariprasad
//  MVC_CatClicker program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
//  This is free software, and you are welcome to redistribute it
//  under certain conditions; type `show c' for details.
//


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
