"use strict"

function openNav() {
  document.getElementById("mySidenav").style.width = "15%";
  document.getElementById("mySidenav").style.border = "4px solid #8f6442";
  document.getElementById("mySidenavBG").style.width = "15%";
  document.getElementById("mySidenavBG").style.transition = ".5s";
  document.getElementById("main").style.marginLeft = "15%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width ="0";
  document.getElementById("mySidenav").style.border = "0px solid #8f6442";
  document.getElementById("mySidenavBG").style.width = "0";
  document.getElementById("mySidenavBG").style.transition = ".57s";
  document.getElementById("main").style.marginLeft= "1%";
  document.getElementById("main").style.marginTop= "0";
}