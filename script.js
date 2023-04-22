//variables
//data types
let userName = "anna"; //string
let userAge = 25; //number
let boolean = false; //boolean

console.log(typeof userName);

//dom diagram
// practice#1
// let newPelement = document.createElement('p');
// newPelement.classList.add('description');
// newPelement.textContent = 'Hello World';

// document.getElementById('js-wraper').appendChild(newPelement);

// console.log(newPelement);

// practice#2
/* <div class="google-link-container"></div> */
// let newDivElement = document.createElement('div');
// newDivElement.classList.add('google-link-container');

// /* <a href="https://google.com" target="_blank">google link</a> */
// let newAelement = document.createElement('a');
// newAelement.setAttribute('href','https://google.com');
// newAelement.setAttribute('target', '_blank');
// newAelement.textContent = 'Google link';

// newDivElement.appendChild(newAelement);

// document.getElementById('js-wraper').appendChild(newDivElement);

//practice#3
/* <ul class="ul-item">
<li class="li-item">Item1</li>
<li class="li-item">Item2</li>
<li class="li-item">Item3</li>
</ul> */

let ulItem = document.createElement("ul");
ulItem.classList.add("ul-item");

let liItem1 = document.createElement("li");
liItem1.textContent = "Item 1";
liItem1.classList.add("li-item");

let liItem2 = document.createElement("li");
liItem2.textContent = "Item 2";
liItem2.classList.add("li-item");

let liItem3 = document.createElement("li");
liItem3.textContent = "Item 3";
liItem3.classList.add("li-item");

ulItem.appendChild(liItem1);
ulItem.appendChild(liItem2);
ulItem.appendChild(liItem3);

document.getElementById("js-wraper").appendChild(ulItem);

// events
let button = document.getElementById("btn-click");

button.addEventListener("click", function () {
  alert("You Pressed This Button");
});



// burger Bar
let navigationElement = document.getElementById('navBar');
let burgerElement = document.getElementById('burBar');


burgerElement.addEventListener('click',function() {
    navigationElement.classList.toggle('navActive');
})