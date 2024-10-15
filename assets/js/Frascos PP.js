/* menu hamburguer */
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

/* categorias */
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});

/* modal */

// Abrir modal ao clicar na imagem
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

/* 2 */

const openButton2 = document.querySelectorAll('.btn_tc2');
openButton2.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton2 = document.querySelectorAll('.close-modal')
closeButton2.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});

/* 6 */
const openButton6 = document.querySelectorAll('.btn_tc6');
openButton6.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton6 = document.querySelectorAll('.close-modal')
closeButton6.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});
/* 7*/
const openButton7 = document.querySelectorAll('.btn_tc7');
openButton7.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton7 = document.querySelectorAll('.close-modal')
closeButton7.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});
/* 8 */
const openButton8 = document.querySelectorAll('.btn_tc8');
openButton8.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton8 = document.querySelectorAll('.close-modal')
closeButton8.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});

/* 11 */
const openButton11 = document.querySelectorAll('.btn_tc11');
openButton11.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton11 = document.querySelectorAll('.close-modal')
closeButton11.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});

/* 12 */
const openButton12 = document.querySelectorAll('.btn_tc12');
openButton12.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton12 = document.querySelectorAll('.close-modal')
closeButton12.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});


