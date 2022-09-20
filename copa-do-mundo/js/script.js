// Mostrar tabela
function toggleTable() {
    var myTable = document.getElementById("table-sel");
    var myTable2 = document.getElementById("player-table-A")
    myTable.style.display = (myTable.style.display == "table") ? "none" : "table";
    myTable2.style.display = (myTable2.style.display == "table") ? "none" : "table";
}

function toggleTable2() {
  var myTable = document.getElementById("table-sel-B");
  var myTable2 = document.getElementById("player-table-B")
  myTable.style.display = (myTable.style.display == "table") ? "none" : "table";
  myTable2.style.display = (myTable2.style.display == "table") ? "none" : "table";
}

function toggleTable3() {
  var myTable = document.getElementById("table-sel-C");
  var myTable2 = document.getElementById("player-table-C")
  myTable.style.display = (myTable.style.display == "table") ? "none" : "table";
  myTable2.style.display = (myTable2.style.display == "table") ? "none" : "table";
}

// Fixar header
window.onscroll = function() {myFunction()};

// Pegar header
var header = document.getElementById("header");

// offset navbar
var sticky = header.offsetTop;

// Adicionar e remover de acordo com scroll "sticky"
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 