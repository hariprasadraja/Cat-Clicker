//Copyright (C) 2017  Hariprasad  ALL RIGHTS RESERVED
//This program is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU General Public License for more details.

//You should have received a copy of the GNU General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.

// MVC_CatClicker Copyright (C) 2017  Hariprasad
// MVC_CatClicker program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
//     This is free software, and you are welcome to redistribute it
//     under certain conditions; type `show c' for details.


console.log("mvc_clicker.js");

var model = {
  cats: [{
    id: 0,
    name: "cat1",
    clicks: 0
  }, {
    id: 1,
    name: "cat2",
    clicks: 0
  }, {
    id: 2,
    name: "cat3",
    clicks: 0
  }, {
    id: 3,
    name: "cat4",
    clicks: 0
  }, {
    id: 4,
    name: "cat5",
    //  clicks: null
    clicks: 0
  }],
  currentcat: {}
}


var Octopus = {

  getCatName: function(i) {

    this.catname = model.cats[i].name;
    if (this.catname != "") {
      console.log("Succesfully get the cat name");
      return this.catname
    } else {
      console.log("Cat name is not present");
      return "";
    }
  },

  getCatClicks: function(i) {
    this.catclick = model.cats[i].clicks;
    if (this.catclick !== "") {
      console.log("Succesfully get the cat click");
      return this.catclick;
    } else {
      console.log("cat click are unable to count");
      return ""
    }
  },
  getCatId: function(i) {
    this.catclick = model.cats[i].id;
    if (this.catclick !== "") {
      console.log("Succesfully get the cat click");
      return this.catclick;
    } else {
      console.log("cat click are unable to count");
      return ""
    }
  },

  incrementCatClick: function() {
    let firstChildId = this.childNodes[0].id;
    for (i = 0; i < model.cats.length; i++) {
      if (model.cats[i].name === firstChildId) {
        ++model.cats[i].clicks;

        view.render(i);
        break;
      }
    }
  }
}
var view = {

  init: function() {
    var elementtorender = document.getElementById('catview');
    var buttontorender = document.getElementById('buttontemplate')
    let buttontemplate = new Array();
    JSONArray jsonarray = model.cats;
    console.log("inside init");
    console.log(jsonarray);

    elementtorender.addEventListener('click', Octopus.incrementCatClick);
    for (i = 0; i < model.cats.length; i++) {
        // Initialising Local Storage




      buttontemplate[i] = '<li> <a onclick = "view.render(' + Octopus.getCatId(i) + ')" > ' + Octopus.getCatName(i) + '</a> </li> ';
      buttontorender.innerHTML = buttontorender.innerHTML + buttontemplate[i];
      console.log(buttontemplate);

    }

  },
  getTemplate: function(i) {
    this.template = "<img id='" + Octopus.getCatName(i) + "' src='" + Octopus.getCatName(i) + ".jpg'><h5><span id='cat-name'>Cat Name:" + Octopus.getCatName(i) + " </span>  <p> Click Me..</p> </h5><h4> No of Clicks :" + Octopus.getCatClicks(i) + "</h4>";
    return this.template;
  },

  render: function(id) {
    var elementtorender = document.getElementById('catview');
    elementtorender.innerHTML = view.getTemplate(id);
  }


}

view.init();
