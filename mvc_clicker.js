 console.log("mvc_clicker.js");
 //
 // var cats = [{
 //   name: "cat1",
 //   clicks: 0
 // },
 // name: "cat2",
 // clicks: 0
 // },
 // name: "cat3",
 // clicks: 0
 // },
 // name: "cat4",
 // clicks: 0
 // },
 // name: "cat5",
 // clicks: 0
 // }];
 //
 // var template = "<img id='cat"+a+"' src='cat"+a+".jpg'><h5><span id='cat-name'> </span>  <p> Click Me..</p> </h5><h4> No of Clicks :  <span id='cat-count'>  </span></h4>";
 // var show = document.getElementById("show");
 // var view ={
 //   init:function(){
 //     for(i = 0;i<cats.length;i++){
 //       console.log(cats[i].name);
 //       var catclick = document.getElementById(cats[i].name);
 //       catclick.addEventListener("click",, false);
 //     }
 //   }
 // }
 //
 // var controller = {
 //
 // }

 var model = {
   cats: [{
     id:0,
     name: "cat1",
     clicks: 0
   }, {
     id:1,
     name: "cat2",
     clicks: 0
   }, {
     id:2,
     name: "cat3",
     clicks: 0
   }, {
     id:3,
     name: "cat4",
     clicks: 0
   }, {
     id:4,
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

   getCurrentCat: function(i) {

   },

   incrementCatClick:function(){
          console.log("incrementCatClick");
          console.log(this);
   }
 }

 var view = {

    init: function() {
                console.log("inside init");
                var elementtorender = document.getElementById('catview');
               console.log("elementtorender");
                 elementtorender.addEventListener('click',Octopus.incrementCatClick);
              },

   rendertemplate: function(i) {
     this.template = "<img id='" + Octopus.getCatName(i) + "' src='" + Octopus.getCatName(i) + ".jpg'><h5><span id='cat-name'>Cat Name:" + Octopus.getCatName(i) + " </span>  <p> Click Me..</p> </h5><h4> No of Clicks :" + Octopus.getCatClicks(i) + "</h4>";
     console.log("template retruned Succesfully");

     console.log(this.template);

     return this.template;
   },
   render: function(id) {
     // display the current cat
     var elementtorender = document.getElementById('catview');
     console.log(elementtorender);
     elementtorender.innerHTML= view.rendertemplate(id);
        }
 }



 view.init();

// var image=document.getElementbyTagName('IMG');
// //console.log(image);
// image.addEventListener('click',function(){
// console.log("inside event listerner");
// console.log(this.id);
// });
