// video
const imgsVdc = document.getElementById("img_vdc");
const imgVdc = document.querySelectorAll("#img_vdc img");
let idxVdc = 0;

function carrosselVdc() {
    idxVdc++;
    if (idxVdc > imgVdc.length - 1) {
        idxVdc = 0;
    }
    const imgWidth = imgVdc[idxVdc].clientWidth;
    imgsVdc.style.transform = `translateX(${-idxVdc * imgWidth}px)`;
}

setInterval(carrosselVdc, 3500);

// Home
const imgsHome = document.getElementById("img");
const imgHome = document.querySelectorAll("#img img");
let idxHome = 0;
let imgWidth;

function setupCarrouselHome() {
    const carrouselContainer = document.querySelector('.container');
    const carrouselImages = [ ...document.querySelectorAll('.container .img_1') ];

    carrouselContainer.style.width = carrouselImages[0].clientWidth * carrouselImages.length;

    imgWidth = carrouselImages[0].clientWidth;
}

function carrosselHome() {
    setupCarrouselHome();

    idxHome++;

    if (idxHome > imgHome.length - 1) {
        idxHome = 0;
    }
    
    imgsHome.style.transform = `translateX(${-idxHome * imgWidth}px)`; 
    // if (screenWidth <= 780) {
    //     imgsHome.style.transform = `translateX(${-idxHome * screenWidth}px)`;
    // } else {
    // }
}

setInterval(carrosselHome, 3500);

window.addEventListener('resize', carrosselHome);
//modal

const openButtons = document.querySelectorAll('.btn_tc');
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});

const closeButtons = document.querySelectorAll('.close-modal')
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});

/* modal 2 */

const openButton = document.querySelectorAll('.btn_tc2');
openButton.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});

const closeButton = document.querySelectorAll('.close-modal')
closeButton.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});
/* menu hamburguer */
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));