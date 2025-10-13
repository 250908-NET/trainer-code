function greetUser() {
  let name = document.getElementById("nameInput").value;
  let favoriteColor = document.getElementById("favoriteColor").value;
  if (name.trim() === "") {
    alert("Please enter your name first!");
  } else {
    alert("Hello, " + name + "! Your favorite color is " + favoriteColor + ".");
  }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);