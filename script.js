// Global Variables
var account1 = document.getElementById("account1");
var accbigg = document.getElementById("accbigg");
var accsmall = document.getElementById("accsmall");
var navlink1 = document.getElementById("navlink1");
var navlink2 = document.getElementById("navlink2");
var navbar1 = document.getElementById("navbar1");
var navbar2 = document.getElementById("navbar2");
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var hamm = document.getElementById("hamburger");
var blank1 = document.getElementById("blank1");
var blank2 = document.getElementById("blank2");
var vel1 = document.getElementById("vel1");
var vel2 = document.getElementById("vel2");
var dingo = document.getElementById("dingo");
var foo = document.getElementById("foo");
var accsmall = document.getElementById("accsmall");
//functions big
function open_nav1(){
    navlink1.style.display = "none";
    navbar1.style.height = "500px";
    close1.style.display = "block";
    account1.style.display = "none";
    vel1.style.display = "none";
    blank1.style.display = "block";
    dingo.style.display = "none";
    foo.style.display = "none";
    accbigg.style.display = "block";
}
function close_nav1(){
    navlink1.style.display = "flex";
    navbar1.style.height = "50px";
    close1.style.display = "none";
    account1.style.display = "block";
    vel1.style.display = "block";
    blank1.style.display = "none";
    dingo.style.display = "block";
    foo.style.display = "flex";
    accbigg.style.display = "none";
}
//functions small
function open_nav2(){
    navlink2.style.display = "flex";
    navbar2.style.height = "500px";
    close2.style.display = "block";
    hamm.style.display = "none";
    blank2.style.display = "block";
    vel2.style.display = "none";
    dingo.style.display = "none";
    foo.style.display = "none";
}
function close_nav2(){
    navlink2.style.display = "none";
    navbar2.style.height = "50px";
    close2.style.display = "none";
    hamm.style.display = "block";
    blank2.style.display = "none";
    vel2.style.display = "block";
    dingo.style.display = "block";
    accsmall.style.display = "none";
    foo.style.display = "flex";
}
function ac_show_small(){
    navlink2.style.display = "none";
    accsmall.style.display = "block";
}
//Scroll UP
function scrollup(){
    window.scrollTo({ top: 0, behavior: "smooth"});
}
//
function scrolla(){
    window.scrollTo({ top: 115, behavior: "smooth"});
}
function date_change1(){
    const d = new Date();
    let year = d.getFullYear();
    let coppa = "&copy;" + " " + year + " " + "Velociera, Inc.";
    document.getElementById("humus").innerHTML = coppa;
    document.getElementById("hamma").innerHTML = year;
}
function date_change2(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthname = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let day = weekday[d.getDay()];
    let month = monthname[d.getMonth()];
    let dattu = d.getDate();
    let year = d.getFullYear();
    let today = "Effective Date:" + " " + day + " " + dattu + " " + " " + month + " " + year;
    let coppa = "&copy;" + " " + year + " " + "Velociera, Inc.";
    document.getElementById("date-now").innerHTML = today;
    document.getElementById("humus").innerHTML = coppa;
}
//ulasc
function openaccess_panel() {
    var foolinks = document.getElementById("footer-links");
    var ulasc = document.getElementById("ulasc");
    var s2 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    foo.style.height = "500px";
    navbar2.style.display = "none";
    navbar1.style.display = "none";
    dingo.style.display = "none";
    s1.style.display = "none";
    s2.style.display = "none";
    ulasc.style.display = "none";
    foolinks.style.display = "flex";
}


