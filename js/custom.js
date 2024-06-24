// ACCORDION JS
const head = document.getElementsByClassName("head");
console.log(head.length);
for (i = 0; i < head.length; i++) {
    head[i].addEventListener("click", function() {
        // this.classList.toggle("active");
        const currentListActive = document.querySelector(".head.active");
        if (currentListActive && currentListActive !== this) {
            currentListActive.classList.toggle("active");
            currentListActive.nextElementSibling.getElementsByClassName.maxHeight = 0;
        }
        this.classList.toggle("active");
    });
}
// ACCORDION JS