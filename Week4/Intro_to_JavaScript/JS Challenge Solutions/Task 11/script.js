


// Christian Brewer
// Matthew Sims






function addNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let sum = n1 + n2;
    document.getElementById("result").textContent = "Result: " + sum;
}

function subtractNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let diff = n1 - n2;
    document.getElementById("result").textContent = "Result: " + diff;
}

function multiplyNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let product = n1 * n2;
    document.getElementById("result").textContent = "Result: " + product;
}

function divideNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result;
    if (n2 === 0) {
        result = "Cannot divide by zero";
    } else {
        result = n1 / n2;
    }
    document.getElementById("result").textContent = "Result: " + result;
}

document.getElementById("addBtn").addEventListener("click", addNumbers);
document.getElementById("subtractBtn").addEventListener("click", subtractNumbers);
document.getElementById("multiplyBtn").addEventListener("click", multiplyNumbers);
document.getElementById("divideBtn").addEventListener("click", divideNumbers);

















