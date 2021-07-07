const hamburger = document.getElementById("hamburger");
const navigation = document.querySelector(".nav-links");

hamburger.addEventListener('click', (e) => {
    navigation.classList.toggle("show");
});