function openPage(pageId, el){

const progress = document.getElementById("progressBar");

const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-item");

pages.forEach(p=>p.classList.remove("active"));
navItems.forEach(n=>n.classList.remove("active"));

progress.style.width="40%";

setTimeout(()=>{

progress.style.width="80%";

},200);

setTimeout(()=>{

document.getElementById(pageId).classList.add("active");

el.classList.add("active");

progress.style.width="100%";

},400);

setTimeout(()=>{

progress.style.width="0%";

},600);

}

// MENU
const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuBtn.onclick = function(){
sideMenu.classList.add("active");
overlay.classList.add("active");
}

overlay.onclick = function(){
sideMenu.classList.remove("active");
overlay.classList.remove("active");
}
