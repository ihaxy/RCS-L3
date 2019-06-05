//Global variables
let startingvalue = 1;
let endingvalue = 100;
let fizzvalue = 3;
let buzzvalue = 5;
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let output3 = document.getElementById('output3');
let output4 = document.getElementById('output4');

//Listeners
document.getElementById('makedivs').addEventListener("click", generateDivs);
document.getElementById('cleardivs').addEventListener("click", deleteDivs);
document.getElementById('startval').addEventListener("change", updateVars);
document.getElementById('endval').addEventListener("change", updateVars);
document.getElementById('fizzval').addEventListener("change", updateVars);
document.getElementById('buzzval').addEventListener("change", updateVars);
document.getElementById('reset').addEventListener('click', resetVars)

//Div generation logic
function createDivs(starting, ending, fizz, buzz) {
    if (document.getElementById('divgen').childElementCount > 0) { //Check for existing generated divs
        return alert("Please delete existing divs first!")
    }
    const cont = document.getElementById('divgen');
    for (let i = starting; i <= ending; i++) {
        let creatediv = document.createElement('div');
        creatediv.setAttribute('id', 'div' + i);
        if (i % fizz === 0 && i % buzz === 0) {
            creatediv.setAttribute("class", 'fizzbuzz');
            creatediv.innerText = "FizzBuzz";
        } else if (i % fizz === 0) {
            creatediv.setAttribute("class", 'fizz');
            creatediv.innerText = "Fizz";
        } else if (i % buzz === 0) {
            creatediv.setAttribute("class", 'buzz');
            creatediv.innerText = "Buzz";
        } else {
            creatediv.setAttribute("class", 'normal');
            creatediv.textContent = "" + i
        }
        cont.appendChild(creatediv);
    }
}

//Button Functions
function deleteDivs() {
    let myNode = document.getElementById("divgen");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    output1.value = 0;
    output2.value = 0;
    output3.value = 0;
    output4.value = 0;
}


function generateDivs() {
    createDivs(startingvalue, endingvalue, fizzvalue, buzzvalue);
    output1.value = document.getElementsByClassName('fizzbuzz').length;
    output2.value = document.getElementsByClassName('fizz').length;
    output3.value = document.getElementsByClassName('buzz').length;
    output4.value = document.getElementsByClassName('normal').length;
}

function updateVars() {
    startingvalue = document.getElementById("startval").value, 1;
    endingvalue = document.getElementById("endval").value, 1;
    fizzvalue = document.getElementById("fizzval").value, 1;
    buzzvalue = document.getElementById("buzzval").value, 1;
}

function resetVars() {
    startingvalue = 1;
    endingvalue = 100;
    fizzvalue = 3;
    buzzvalue = 5;
}