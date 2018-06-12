/* var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; */

/*alert("Hello"); */

/*function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/Users/GLP/Desktop/Etc/MFL.png') {
      myImage.setAttribute ('src','/Users/GLP/Desktop/Etc/MFL.jpg');
    } else {
      myImage.setAttribute ('src','/Users/GLP/Desktop/Etc/MFL.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Get memed, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
