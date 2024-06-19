// Crea array di ogetti per immagini
const images = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    },
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    },
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];


// Prendo contenitore in HTML
const imgContainer = document.getElementById("container");

// Creo Ciclo per creare elemento
images.forEach((element) => {
    let imgItem = (`<div class="item">
                        <img src="${element.image}" alt="">
                        <h1>${element.title}</h1>
                        <p>${element.text}</p>
                    </div>`);
    imgContainer.innerHTML += imgItem;
});

// aggiungo class active al primo elemento
let indexNumber = 0;

let items = document.getElementsByClassName("item");

items[indexNumber].classList.add("active");

// prendo il "bottone next"
const buttonNext = document.querySelector(".next-button");

// Creo un evento al click
buttonNext.addEventListener("click",
    function(){
        // Rimuovo class active
        items[indexNumber].classList.remove("active");

        // aumento valore indice
        indexNumber = (indexNumber + 1) % images.length;
        console.log(indexNumber);

        // aggiugno class active
        items[indexNumber].classList.add("active");
    }
);

// prendo il "bottone prev"
const buttonPreview = document.querySelector(".prev-button");

// creo un altro evento al click
buttonPreview.addEventListener("click",
    function(){
        // Rimuovo class active
        items[indexNumber].classList.remove("active");

        // diminuisco valore indice 
        indexNumber = (indexNumber - 1 + images.length) % images.length;
        console.log(indexNumber);

        // aggiugno class active
        items[indexNumber].classList.add("active");
    }
);