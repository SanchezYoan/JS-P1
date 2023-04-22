
 // Cours DOM


//  Selectors

// Pointe un balise dans le chemin spécifié

// document.querySelector('h4').style.background = "orange";

// const baliseHTML = document.querySelector('h4').style.background = "orange";

// console.log(baliseHTML)

// Click event

const questionContainer = document.querySelector(".click-event")
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const response = document.querySelector('p')
// console.log("questionContainer");

questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-click")
});

// Ajouter une Class

btn1.addEventListener('click', () => {
    // console.log("Click !")
    response.classList.add('show-response') 
    response.style.background = "red"
    
})
btn2.addEventListener('click', () => {
    // console.log("Click !")
    response.classList.add('show-response') 
    response.style.background = "blue";

})


{/* <div>  > #id > .class > baliseHTML */}

// --------------------------------------------------------

// Mouse events

const mousemove = document.querySelector('.mousemove');
// console.log(mousemove);

window.addEventListener("mousemove", (e) => {
    // console.log(e)
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
})
window.addEventListener("mousedown", () => {
    // console.log("test");
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener("mouseup", () => {
    // console.log("test");
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
})

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0, 0, 0, 0.6)"
})

questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.background = "blue"
})

response.addEventListener('mouseover', () => {
    response.style.transform = "rotate(2deg)";
})

// -------------------------------------------------------------------

// Keypress

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
};

document.addEventListener("keypress", (e) => {
    // console.log(e.key)
    key.textContent = e.key

    if(e.key === "j") {
        keypressContainer.style.background = "pink";
    } else if (e.key === "h") {
        keypressContainer.style.background = "green";
    } else {
        keypressContainer.style.background = "black";    
    }

    if (e.key === "z") ring(e.key);
    
})
// -----------------------------------------------------------

// Scroll event 

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {

    if (window.scrollY > 120 ) {
        nav.style.transition = "0.5s";
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px"
    }
})

// ------------------------------------------------------------

// Form event 
 
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();


    if (cgv.checked) {
        // Affiche le contenu des variables
        document.querySelector("form > div").innerHTML = `
            <h3>Pseudo : ${pseudo}</h3>
            <h4>Languages préféré : ${language}</h4>
        `;
    } else {
        alert("Veuillez acceptez les CGV");
    }
});

// ------------------------------------------------------------

// Load event

// appelé des fonctions au chargement de la page
window.addEventListener("load", () => {
    // console.log("Document chargé !")
});

// ------------------------------------------------------------

//  ForEach 

// selectionner tous les éléments de la class
const boxes = document.querySelectorAll('.box')


boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)"
    })
});
