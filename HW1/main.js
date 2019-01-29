var input = prompt("Please enter a list of grades, as an integer out of 100. Separate entries with spaces. Any invalid entries will be automatically removed.");
var inputDisplay = document.getElementById('input');
var displayAvg = document.getElementById('displayAvg');
var inputSplit = input.split(' ');
var inputNumbers = inputSplit.map(Number);
inputNumbers = inputNumbers.filter(Number);

function average(inputNumbers){
	var sum = 0;
	for(i = 0; i < inputNumbers.length; i++){
		sum += inputNumbers[i];
	}
	return sum / inputNumbers.length;
}

// Display unsorted values, then average
inputDisplay.innerHTML = input;
displayAvg.innerHTML = average(inputNumbers);
