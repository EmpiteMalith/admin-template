// Sidebar Open & Close
let sideTrigger = document.querySelector(".sim__header__trigger");
let layoutbody = document.querySelector(".sim__menuleft__slider");

sideTrigger.addEventListener("click", () => {
  layoutbody.classList.toggle("sim__menuleft--collapsed");
});


//User Menu
let userMenu = document.querySelector(".sim__header__userwarapper");
let userSubMenu = document.querySelector(".sim__header__submenu");
userMenu.addEventListener("click", () => {
  userSubMenu.classList.toggle("sim__header__submenu--active");
});


//Notifications
let notifyIcon = document.querySelector(".sim__header__notify");
let notifyArea = document.querySelector(".sim__header__notify__area");
notifyIcon.addEventListener("click", () => {
  notifyArea.classList.toggle("sim__header__notify__area--active");
});

//Fullscreen
var fullPage = document.documentElement;
let fullScreen = document.querySelector(".sim__header_fullscreen");
fullScreen.addEventListener("click", () => {
  if (fullPage.requestFullscreen) {
    fullPage.requestFullscreen();
  } else if (fullPage.webkitRequestFullscreen) {
    /* Safari */
    fullPage.webkitRequestFullscreen();
  } else if (fullPage.msRequestFullscreen) {
    /* IE11 */
    fullPage.msRequestFullscreen();
  }
});


////////Footer Year time/////////
let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;


///////////Menu Highlight/////////////
const activePage = window.location.pathname.split('/').pop().split('.')[0];
console.log(activePage)
if( activePage == "" || activePage == "index" ){
  document.getElementById("home-page").classList.add("active--link");
}
else{
  const navLinks = document.querySelectorAll('.sim__menuleft__navigation .sim__menuleft__item__link');
  navLinks.forEach(link => {
        if (link.href.includes(activePage)) {
            link.classList.add('active--link');
        }
    });
}


