console.log("mvc_clicker.js");
var model ={
  cats: [{
    id: 0,
    name:"cat1",
    clicks: 0,
    ImageURL:"cat1.jpg"
  }, {
    id: 1,
    name:"cat2",
    clicks: 0,
    ImageURL: "cat2.jpg"

  }, {
    id: 2,
    name:"cat3",
    clicks: 0,
    ImageURL: "cat3.jpg"

  }, {
    id: 3,
    name:"cat4",
    clicks: 0,
    ImageURL: "cat4.jpg"

  }, {
    id: 4,
    name:"cat5",
    //  clicks: null
    clicks: 0,
    ImageURL: "cat5.jpg"

  }],
  insertCats:function(catname,caturl,catclick){

      let index =this.cats.length;
            for(i=0;i<index;i++){
              if(Octopus.getCatName(i) === catname){
              alert("cat name is already present");
           return ""
        }
         if(Octopus.getCatImageURL(i) === catclick){
            alert("cat image is aleray present");
            return ""
        }
       }
       let newcat = {
           id: index,
           name:catname,
           //  clicks: null
           clicks: catclick,
           ImageURL:caturl
       }
       this.cats[index]=newcat;
       console.log(model.cats);

       return index
}
};

var Octopus = {
  init:function(){
    Adminform = document.forms["Adminform"];
     Adminform.style.display= "none";
     // for Admin button
     document.getElementById('Admin').addEventListener('click',function(){
       Adminform.style.display= "block";
     });
     //for Logout button
     document.getElementById('logout').addEventListener('click',function(){
       Adminform.style.display="none";
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
  submit:function(){
      let catname=Adminform['catname'].value
      let ImageURL=Adminform['ImageURL'].value
      let Clicks=Adminform['Clicks'].value
      model.insertCats(catname,ImageURL,Clicks);
      view.init(true);
      event.preventDefault();



  }
}
var view = {
  init: function(flag) {
    let elementtorender = document.getElementById('catview');
    let buttontorender = document.getElementById('buttontemplate')
    let buttontemplate = new Array();
    elementtorender.addEventListener('click', Octopus.incrementCatClick);
    console.log(model.cats);
    console.log(model.cats.length);
    if(flag==true){
     buttontorender.innerHTML = "";
    }
    for (i = 0; i< model.cats.length; i++) {
      buttontemplate[i] = '<li> <a onclick = "view.render(' + Octopus.getCatId(i) + ')" > ' + Octopus.getCatName(i) + '</a> </li> ';
      buttontorender.innerHTML = buttontorender.innerHTML + buttontemplate[i];
    }
  },
  getTemplate: function(i) {
    this.template = "<img id='" + Octopus.getCatName(i) + "' src='" + Octopus.getCatImageURL(i) + "'><h5><span id='cat-name'>Cat Name:" + Octopus.getCatName(i) + " </span>  <p> Click Me..</p> </h5><h4> No of Clicks :" + Octopus.getCatClicks(i) + "</h4>";
    return this.template;
  },
  render: function(id) {
    let elementtorender = document.getElementById('catview');
    elementtorender.innerHTML = view.getTemplate(id);
  }


}

Octopus.init();
