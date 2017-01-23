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
    elementtorender.addEventListener('click', Octopus.incrementCatClick);
    for (i = 0; i < model.cats.length; i++) {
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
