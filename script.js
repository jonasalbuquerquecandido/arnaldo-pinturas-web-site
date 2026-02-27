/* ===============================
   DOM READY
================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initSmoothScroll();
    initStickyHeader();
    initScrollAnimations();
    initWhatsappButton();
    initFormValidation();
    initPhoneMask();
    initFAQ();

});

/* ===============================
   1. MENU MOBILE
================================= */

function initMobileMenu() {
    const menuBtn = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (!menuBtn || !navbar) return;

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
}

/* ===============================
   2. SCROLL SUAVE
================================= */

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

/* ===============================
   3. HEADER STICKY COM EFEITO
================================= */

function initStickyHeader() {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/* ===============================
   4. ANIMAÇÃO AO APARECER
================================= */

function initScrollAnimations() {

    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
}

/* ===============================
   5. BOTÃO WHATSAPP FLUTUANTE
================================= */

function initWhatsappButton() {

    const whatsappBtn = document.createElement("a");

    whatsappBtn.href = "https://wa.me/5500000000000"; // coloque o número real
    whatsappBtn.target = "_blank";
    whatsappBtn.classList.add("whatsapp-float");
    whatsappBtn.innerHTML = "💬";

    document.body.appendChild(whatsappBtn);
}

/* ===============================
   6. VALIDAÇÃO DE FORMULÁRIO
================================= */

function initFormValidation() {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        const name = form.querySelector('input[name="name"]');
        const phone = form.querySelector('input[name="phone"]');
        const message = form.querySelector('textarea[name="message"]');

        if (!name.value.trim() || !phone.value.trim() || !message.value.trim()) {
            e.preventDefault();
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (phone.value.length < 14) {
            e.preventDefault();
            alert("Digite um telefone válido.");
        }

    });
}

/* ===============================
   7. MÁSCARA DE TELEFONE
================================= */

function initPhoneMask() {

    const phoneInput = document.querySelector('input[name="phone"]');

    if (!phoneInput) return;

    phoneInput.addEventListener("input", (e) => {

        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 11) value = value.slice(0, 11);

        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");

        e.target.value = value;
    });
}

/* ===============================
   8. FAQ INTERATIVO
================================= */

function initFAQ() {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
}