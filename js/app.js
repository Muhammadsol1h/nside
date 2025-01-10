var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Bir qatorga 3ta slayd ko'rsatish
    spaceBetween: 30, // Slaydlar orasidagi masofa
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        1400: {
            slidesPerView: 3, // Kichik ekranlarda 2ta slayd
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2, // Kichik ekranlarda 2ta slayd
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1, // Juda kichik ekranlarda 1ta slayd
            spaceBetween: 10,
        },
    },
});