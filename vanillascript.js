//Global variables
let startingvalue = parseInt(document.getElementById("startval").value, 1);
let endingvalue =  parseInt(document.getElementById("endval").value, 1);
let fizzvalue = parseInt(document.getElementById("fizzval").value, 1);
let buzzvalue = parseInt(document.getElementById("buzzval").value, 1);

//Listeners
document.getElementById('makedivs').addEventListener("click", generateDivs);
document.getElementById('cleardivs').addEventListener("click", deleteDivs);

//Logic
function createDivs(startingvalue, endingvalue, fizzvalue, buzzvalue) {
    const cont = document.getElementById('divgen');
    for (let i = startingvalue; i <= endingvalue; i++) {
        let creatediv = document.createElement('div');
        creatediv.setAttribute('id', 'div' + i);
        creatediv.textContent = "" + i;

        if (i % fizzvalue === 0 && i % buzzvalue === 0) {
            creatediv.setAttribute("class", 'fizzbuzz');
        } else if (i % fizzvalue === 0) {
            creatediv.setAttribute("class", 'fizz');
        } else if (i % buzzvalue === 0) {
            creatediv.setAttribute("class", 'buzz');
        } else {
            creatediv.setAttribute("class", 'normal');
        }
        cont.appendChild(creatediv);
    }
    console.log("createDivs executed");
}

//Button Functions
function deleteDivs() {
  for(i = document.getElementById('divgen').childElementCount; i > 0; i--) {
      document.getElementById('div' + i).remove();
      console.log("Deleted element with id " + i)
  }
    console.log(document.getElementById('divgen').childElementCount);
}

function generateDivs() {
    console.log("Divs created");
createDivs(1, 30, 3, 5);
}

console.log('Running');



