let bar = document.querySelector(".bar");
window.onscroll = function () {
    if(window.scrollY >= window.innerHeight - 48) {
        bar.classList.add("display");
    }
    else {
        bar.classList.remove("display");
    }
}
let displayItems = document.querySelectorAll(".show-display");
window.onload = function() {
    displayItems.forEach(e => {
        e.classList.add("display")
    });
}
let contentMenu = document.querySelector(".content-menu");
let removeMenu = document.querySelector(".content-menu i");
removeMenu.onclick = function() {
    contentMenu.classList.add("no-display");
}
let displayMenu = document.querySelectorAll(".bar .menu > *");
displayMenu.forEach(e => {
    e.onclick = function() {
        contentMenu.classList.remove("no-display")
    }
})
let transformSection = document.querySelectorAll(".landing .transform-section > *");
transformSection.forEach(e => {
    e.onclick = function() {
        // window.scrollTo({
        //     left: 0,
        //     top: window.innerHeight - 63,
        //     behavior: "smooth"
        // });
        const myInterval = setInterval(function() {
            if(scrollY < window.innerHeight - 48) {
                window.scrollBy(0,10);
            }
            else {
                clearInterval(myInterval);
            }
        }, 1)
    }
})