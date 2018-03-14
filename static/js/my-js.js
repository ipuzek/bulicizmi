class="button well alert alert-danger text-center" id="myButton" onclick="alertColor()">
   alert-danger 

function alertColor() {
  var result = " alert-info";
  document.getElementById("toInfo").innerHTML = result; 
  document.getElementById("myButton").style.backgroundColor = "#d9edf7";
  document.getElementById("myButton").style.color = "#3a87ad";
  document.getElementById("myButton").style.borderColor = "#bce8f1";
}
