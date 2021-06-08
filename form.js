class Form {

    constructor() {
this.name = createInput('name');

this.button = createButton('play');

    }

    showForm() {
var header = createElement("h2");
header.html("CAR RACING GAME");
header.position(130, 50);

this.name.position(130, 200)
this.button.position(130, 240)
this.button.mousePressed(function(){
    
    console.log(this.name)
    this.name.hide();
    this.button.hide(); 
    
    })
}}
