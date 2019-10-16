// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {scrollFunction()};

function scrollFunction () {
    if (document.body.clientWidth <= 550) return;
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").classList.add("scroll");
        // document.getElementById("subtitle").classList.add("scroll");
    } else {
        document.getElementById("header").classList.remove("scroll");
        // document.getElementById("subtitle").classList.remove("scroll");
    }
}
