//mode sombre
let darkMode = false;

function changeDarkMode() {
  if (darkMode) {
    darkMode = false;
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "#efe7e5");
    document.documentElement.style.setProperty("--nav-link-color", "black");
    document.documentElement.style.setProperty("--popup-overlay-color", "white");
    document.getElementById("dark-light-mode").innerHTML = "Dark mode";
  } else {
    darkMode = true;
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "rgba(0, 0, 0, 0.800)");
    document.documentElement.style.setProperty("--nav-link-color", "white");
    document.documentElement.style.setProperty("--popup-overlay-color", "rgba(0, 0, 0, 0.950)");
    document.getElementById("dark-light-mode").innerHTML = "Light mode";
  }
}



// Ecriture du texte seul
var aText = new Array("Développeur Junior web et web mobile ");
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("sec-text");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}
typewriter();



//evennement d'apparition au scroll de la page 
const sr = ScrollReveal({
  easing: 'ease-in',
  origin:"left",
  duration:500,
  distance:"100px"
});

sr.reveal(".card", {
  interval: 200
},500);

sr.reveal(".skills-logo", {
  interval: 100,
  scale: 1.5
},300);

sr.reveal("#footer", {
  duration:2000,
},800);


//popup sur les carte des projets
function togglePopup(popupElement) {
  popupElement.classList.toggle("open");
}


// burger navbar
const links = document.querySelectorAll("nav li");


icons.addEventListener("click", () => {
    nav.classList.toggle("active")
})


links.forEach((link) =>{
    link.addEventListener("click", () =>{
        nav.classList.remove("active");
    });
});