var numOfBoxes = 4;
var numOfRows = new Array();
var numOfColumns = new Array();


/*--------------------------------------- 

function to change the variable --grid-thing, so it matches the number of rows and columns of the user input


.grid {
    display: inline-grid;
    grid-template-columns: var(--grid-thing);
    grid-template-rows: var(--grid-thing);
}

// rows and columns 
// total boxes = rows x columns
--------------------------------------------*/

// Iterates create a box for the user choice of boxes


function createBoxes(rows, columns) {
	
	var numOfBoxes = rows * columns;
		
	// Creates a new box
	document.addEventListener('DOMContentLoaded', function () {

		var grid = document.getElementById('red');

		for (var i = 0; i < numOfBoxes; i++) {
			var div = document.createElement('div');
			div.id = 'box' + (i + 1).toString();
			div.innerHTML = (i + 1).toString();
			div.className = 'box';
	
			document.grid.appendChild(div);
		}
	}, false);

	console.log(`${rows} rows were created`)
	console.log(`${columns} columns were created`)
}

createBoxes(6, 6);

/*
document.addEventListener('DOMContentLoaded', () => {

	var rowTextOutput;
	var colTextOutput;	

	document.querySelector('form').addEventListener('submit', event => {

	event.preventDefault()
    createBoxes(parseInt(rowTextOutput), parseInt(colTextOutput));
  })
  
	const rowInputField = document.querySelector('input[id="rowInput"]')
	rowInputField.addEventListener('input', event => {
    rowTextOutput = rowInputField.value
  })

	const colInputField = document.querySelector('input[id="colInput"]')
	colInputField.addEventListener('input', event => {
    colTextOutput = colInputField.value
  })
})
*/


/*-------------------------THIS WORKS--------------------------------------- */
// Stores the colors
var colors = ["blue", "red", "yellow", "orange", "green", "brown", "purple"];

// Selects a random color from colors
function ranColor() {
	var num = Math.floor(Math.random(colors.length) * 100) % colors.length;
	
    choice = colors[num];
	
    return choice;
}

// Changes the color of the boxes 
function changeColor1() {
	var elem = document.getElementById("box1").style.background = colors[Math.floor(Math.random(colors.length) * 100) % colors.length];
}

function changeColor2() {
	var elem = document.getElementById("box2").style.background = ranColor();
}

function changeColor3() {
	var elem = document.getElementById("box3").style.background = ranColor();
}

function changeColor4() {
	var elem = document.getElementById("box4").style.background = ranColor();
}

