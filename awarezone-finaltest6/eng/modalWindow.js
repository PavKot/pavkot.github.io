// MODAL WINDOW ON MAP

var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementById('spanclose');
var span3 = document.getElementById('spanclose2');

var Uzhgorod = document.getElementById('Uzhgorod');
var Chernihiv = document.getElementById('Chernihiv');
var Dnipro = document.getElementById('Dnipro');

Uzhgorod.onclick = function() {
    modal.style.display = "block";
}

Chernihiv.onclick = function() {
  modal2.style.display = "block";
}

Dnipro.onclick = function() {
  modal3.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
}

span2.onclick = function(){
  modal2.style.display = "none";
}

span3.onclick = function(){
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal2 || event.target == modal3) {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}

var map = document.getElementById('map_block');

map.scrollLeft = 500;