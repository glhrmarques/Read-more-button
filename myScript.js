const button = document.querySelector(".read-button");
const text = document.querySelector(".text");

button.addEventListener('click', (e) => {
    text.classList.toggle('show-more');
    if (button.innerHTML === "Read More") {
        button.innerHTML = "Read Less";
    } else {
        button.innerHTML = "Read More";
    }
});
