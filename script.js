// global variables
var a = document.getElementById("home");
var b = document.getElementById("products");
var c = document.getElementById("services");
var d = document.getElementById("contact");
var e = document.getElementById("about");
var f = document.getElementById("store");
var m = document.getElementById("navv2menu");
var n = document.getElementById("navbar2");
//
//global tabs
function home(){
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
}
function products(){
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
}
function services(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
}
function contact(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    e.style.display = "none";
    f.style.display = "none";
}
function about(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "block";
    f.style.display = "none";
}
function store() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "block";
}
//scroll 
function scrollup(){
    window.scrollTo({ top: 0, behavior: "smooth"});
}
//
//expand nav
function expandnav(){
    if (n.style.height === "57px" && m.style.display === "none") {
        n.style.height = " 400px";
        m.style.display = "flex";
    }
    else{
        n.style.height = "57px";
        m.style.display = "none";
    }
}
function home1(){
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    n.style.height = "57px";
    m.style.display = "none";
}
function products1(){
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    n.style.height = "57px";
    m.style.display = "none";
}
function services1(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    n.style.height = "57px";
    m.style.display = "none";
}
function contact1(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    e.style.display = "none";
    f.style.display = "none";
    n.style.height = "57px";
    m.style.display = "none";
}
function about1(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "block";
    f.style.display = "none";
    n.style.height = "57px";
    m.style.display = "none";
}
function store1(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "block";
    n.style.height = "57px";
    m.style.display = "none";
}
//
/* active
document.addEventListener('DOMContentLoaded', () => {
    const navlinks =document.querySelectorAll('.navbar-section a');

    navlinks.forEach(link => {
        link.addEventListener('click', () => {
            navlinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        })
    })
})
*/