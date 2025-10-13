function sayHello() {
  alert("Hello from the external file!");
}

function sayGoodbye() {
  alert("Goodbye! Have a great day!");
}

let helloBtn = document.getElementById("helloBtn");
helloBtn.addEventListener("click", sayHello);

let goodbyeBtn = document.getElementById("goodbyeBtn");
goodbyeBtn.addEventListener("click", sayGoodbye);