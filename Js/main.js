const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (scrollY > 120) {
        header.classList.add("shrink")
    } else {
        header.classList.remove("shrink")
    }

})

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 3,
        },
    },
});