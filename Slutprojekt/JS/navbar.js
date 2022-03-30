"use strict"

function openNav() {
  document.getElementById("mySidenav").style.width = "246px";
  document.getElementById("mySidenavBG").style.width = "250px";
  document.getElementById("mySidenavBG").style.transition = ".5s";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width ="0";
  document.getElementById("mySidenavBG").style.width = "0";
  document.getElementById("mySidenavBG").style.transition = ".6s";
  document.getElementById("main").style.marginLeft= "10px";
  document.getElementById("main").style.marginTop= "10px";
}