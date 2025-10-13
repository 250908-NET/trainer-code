document.getElementById("clickBtn").addEventListener("click", change);

function change() {
  // get the first <h1> element
  let message = document.getElementsByTagName("h1")[0]; //could have used id=message as well
  message.innerHTML = "You clicked the button!";
}