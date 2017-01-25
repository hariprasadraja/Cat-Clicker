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

console.log("MVC_clickerPro.js");

const GET = "Set Data form localStorage"
const SET = "Get Data form localStorage"
//  Model
var model = {
  cats: [{
    id: 0,
    name: "cat1",
    clicks: 0,
    ImageURL: "cat1.jpg"
  }, {
    id: 1,
    name: "cat2",
    clicks: 0,
    ImageURL: "cat2.jpg"

  }, {
    id: 2,
    name: "cat3",
    clicks: 0,
    ImageURL: "cat3.jpg"

  }, {
    id: 3,
    name: "cat4",
    clicks: 0,
    ImageURL: "cat4.jpg"

  }, {
    id: 4,
    name: "cat5",

    clicks: 0,
    ImageURL: "cat5.jpg"

  }],

  insertCats: function(catname, caturl, catclick) {

    let index = this.cats.length;
    for (i = 0; i < index; i++) {
      if (Octopus.getCatName(i) === catname) {
        alert("cat name is already present");
        return ""
      }
      if (Octopus.getCatImageURL(i) === catclick) {
        alert("cat image is aleray present");
        return ""
      }
    }
    let newcat = {
      id: index,
      name: catname,
      clicks: catclick,
      ImageURL: caturl
    }
    this.cats.push(newcat);
    Octopus.storageLocal(SET);
  }
}

// Contoller
var Octopus = {
  init: function() {
    Adminform = document.forms["Adminform"];
    Adminform.style.display = "none";
    // for Admin button
    document.getElementById('Admin').addEventListener('click', function() {
      Adminform.style.display = "block";
    });
    //for Logout button
    document.getElementById('logout').addEventListener('click', function() {
      Adminform.style.display = "none";
    });
    view.init();
  },

  getCatName: function(i) {
    this.catname = model.cats[i].name;
    if (this.catname != "") {
      return this.catname
    } else {
      return "";
    }
  },

  getCatImageURL: function(i) {
    this.ImageURL = model.cats[i].ImageURL;
    if (this.ImageURL != "") {
      return this.ImageURL
    } else {
      return "";
    }
  },

  getCatClicks: function(i) {
    this.catclick = model.cats[i].clicks;
    if (this.catclick !== "") {
      return this.catclick;
    } else {
      return ""

    }
  },

  getCatId: function(i) {
    this.catclick = model.cats[i].id;
    if (this.catclick !== "") {

      return this.catclick;
    } else {

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
  },

  submit: function() {
    let catname = Adminform['catname'].value
    let ImageURL = Adminform['ImageURL'].value
    let Clicks = Adminform['Clicks'].value
    model.insertCats(catname, ImageURL, Clicks);
    view.init(true);
  },

  getCats: function() {
    return model.cats;
  },

  storageLocal: function(flag) {
    if(flag===GET){
    let x = JSON.stringify(this.getCats());

    if (localStorage.getItem('cats') === null) {
      localStorage.setItem('cats', x);
    } else {
      x = JSON.parse(localStorage.getItem('cats'));
      model.cats = x;
    }
  }
  else if(flag===SET){
    let x = JSON.stringify(this.getCats());
    localStorage.setItem("cats", x);
  }
}
}
// View
var view = {

  init: function(flag) {
    this.catImageRender = document.getElementById('catview');
    this.catDetailsRender = document.getElementById('catdetails');
    let buttonToRender = document.getElementById('buttontemplate')
    let buttonTemplate = new Array();
    this.catImageRender.addEventListener('click', Octopus.incrementCatClick);
    if (flag == true) {
      buttonToRender.innerHTML = "";
    }
    Octopus.storageLocal(GET);  // Get localStorage data and save it to model.cats or create a new localStorage data and save it to model.cats
    for (i = 0; i < model.cats.length; i++) {
      buttonTemplate[i] = '<li> <a onclick = "view.render(' + Octopus.getCatId(i) + ')" > ' + Octopus.getCatName(i) + '</a> </li> ';
      buttonToRender.innerHTML = buttonToRender.innerHTML + buttonTemplate[i];
    }
  },

  getTemplate: function(i, renderflag) {
    if (renderflag !== "" && i !== "") {
      if (renderflag === "catImage") {
        this.template = "<img id='" + Octopus.getCatName(i) + "' src='" + Octopus.getCatImageURL(i) + "'>";
      } else if (renderflag === "catDetails") {
        this.template = "<h5><span id='cat-name'>Cat Name:" + Octopus.getCatName(i) + " </span>  <p> Click Me..</p> </h5><h4> No of Clicks :" + Octopus.getCatClicks(i) + "</h4>";
      }
      return this.template;
    } else {
      return prompt("Your cat is not found");
    }
  },

  render: function(id) {
    this.catImageRender.innerHTML = this.getTemplate(id, "catImage");
    this.catDetailsRender.innerHTML = this.getTemplate(id, "catDetails");
  }
}

Octopus.init();
