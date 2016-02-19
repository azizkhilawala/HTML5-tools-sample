(function(main,undefined){
console.log("this is main .js file");
  }(window.main == window.main || {}));


(function(controller,undefined){
  var a = "controller";
  console.log("this is a controller");
}(main.controller == main.controller || {}));
