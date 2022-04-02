"use strict"

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.border = "4px solid #8f6442";
  document.getElementById("mySidenavBG").style.width = "250px";
  document.getElementById("mySidenavBG").style.transition = ".5s";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width ="0";
  document.getElementById("mySidenav").style.border = "0px solid #8f6442";
  document.getElementById("mySidenavBG").style.width = "0";
  document.getElementById("mySidenavBG").style.transition = ".57s";
  document.getElementById("main").style.marginLeft= "10px";
  document.getElementById("main").style.marginTop= "0";
}

/*
-----------------------------------------------
var x = window.matchMedia("(max-width: 768px)")
openNavbar(x)
x.addListener(openNavbar)

function openNavbar(x) {
  if (x.matches) {
    function responsiveNavbar() {
      var element = document.getElementById("mySidenav", "mySidenavBG");
      element.classList.add("open");
    }
  }
}




function closeNav() {
  document.getElementById("mySidenav").style.width ="0";
  document.getElementById("mySidenav").style.border = "0px solid #8f6442";
  document.getElementById("mySidenavBG").style.width = "0";
  document.getElementById("mySidenavBG").style.transition = ".57s";
  document.getElementById("main").style.marginLeft= "10px";
  document.getElementById("main").style.marginTop= "0";
}
*/