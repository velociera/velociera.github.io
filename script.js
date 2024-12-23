//Khatarnak Variables
var dingo = document.getElementById("dingo");
var foo = document.getElementById("foo");
var accbigga = document.getElementById("accbigga");
var navlink1 = document.getElementById("navlink1");
var navlink2 = document.getElementById("navlink2");
var navbar1 = document.getElementById("navbar1");
var navbar2 = document.getElementById("navbar2");
var a1 = document.getElementById("a1");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var v1 = document.getElementById("v1");
var v2 = document.getElementById("v2");
var hammy = document.getElementById("hammy");
var clossa = document.getElementById("clossa");
var accsmalla = document.getElementById("accsmalla");
//
function op_nav1(){
    dingo.style.display = "none";
    foo.style.display = "none";
    accbigga.style.display = "block";
    navlink1.style.display = "none";
    a1.style.display = "none";
    b1.style.display = "block";
    c1.style.display = "block";
    v1.style.display = "none";
    navbar1.style.height = "500px";
}
function cl_nav1(){
    dingo.style.display = "block";
    foo.style.display = "block";
    accbigga.style.display = "none";
    navlink1.style.display = "flex";
    a1.style.display = "block";
    b1.style.display = "none";
    c1.style.display = "none";
    v1.style.display = "block";
    navbar1.style.height = "50px";
}
//Scroll UP
function scrollup(){
    window.scrollTo({ top: 0, behavior: "smooth"});
}
//
function op_nav2(){
    foo.style.display = "none";
    navbar2.style.height = "500px";
    hammy.style.display = "none";
    clossa.style.display = "block";
    v2.style.display = "none";
    b2.style.display = "block";
    navlink2.style.display = "flex";
}
function cl_nav2(){
    foo.style.display = "block";
    navbar2.style.height = "50px";
    hammy.style.display = "block";
    clossa.style.display = "none";
    v2.style.display = "block";
    b2.style.display = "none";
    navlink2.style.display = "none";
    accsmalla.style.display = "none";
}
function ac_show_smalla() {
    navlink2.style.display = "none";
    accsmalla.style.display = "block";
}