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
/* 3 */
const openButton3 = document.querySelectorAll('.btn_tc3');
openButton3.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton3 = document.querySelectorAll('.close-modal')
closeButton3.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});

/* 4 */
const openButton4 = document.querySelectorAll('.btn_tc4');
openButton4.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton4 = document.querySelectorAll('.close-modal')
closeButton4.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});

/* 5 */
const openButton5 = document.querySelectorAll('.btn_tc5');
openButton5.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton5 = document.querySelectorAll('.close-modal')
closeButton5.forEach(button => {
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

/* 9 */
const openButton9 = document.querySelectorAll('.btn_tc9');
openButton9.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton9 = document.querySelectorAll('.close-modal')
closeButton9.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});
/* 10 */
const openButton10 = document.querySelectorAll('.btn_tc10');
openButton10.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton10 = document.querySelectorAll('.close-modal')
closeButton10.forEach(button => {
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

/* 13 */
const openButton13 = document.querySelectorAll('.btn_tc13');
openButton13.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton13 = document.querySelectorAll('.close-modal')
closeButton13.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});
/* 14 */
const openButton14 = document.querySelectorAll('.btn_tc14');
openButton14.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton14 = document.querySelectorAll('.close-modal')
closeButton14.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});
/* 15 */
const openButton15 = document.querySelectorAll('.btn_tc15');
openButton15.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal()
    });
});
const closeButton15 = document.querySelectorAll('.close-modal')
closeButton15.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close()
    });
});