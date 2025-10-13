// you can use a .js file if required,
// just nedd to call it at index.html
let list = document.getElementById("myList");
        let button = document.getElementById("addButton");
        
        button.addEventListener("click", function() {
            let newItem = document.createElement("li");
            newItem.textContent = "New Item";
            list.appendChild(newItem);
        })           