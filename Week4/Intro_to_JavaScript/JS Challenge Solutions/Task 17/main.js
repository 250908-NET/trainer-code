let text = document.getElementById("text");
text.addEventListener("click", function() {
    text.classList.toggle("highlight");
    document.body.classList.toggle("background");
});