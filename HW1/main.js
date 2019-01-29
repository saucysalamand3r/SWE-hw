var input = prompt("Please enter a series of integers, separted by spaces. Any non-integers will be automatically removed.");
var inputDisplay = document.getElementById('input');
var displayMax = document.getElementById('displayMax');
var displayMin = document.getElementById('displayMin');
var max, min;
var inputSplit = input.split(' ');
var inputNumbers = inputSplit.map(Number);
inputNumbers.sort(sortNumber);
inputNumbers = inputNumbers.filter(Number);
console.log(inputNumbers);

function sortNumber(a,b){
    return a - b;
}

// Display unsorted values, then max/min
inputDisplay.innerHTML = input;
displayMax.innerHTML = inputNumbers[inputNumbers.length - 1];
displayMin.innerHTML = inputNumbers[0];