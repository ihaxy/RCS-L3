//Global variables
let startingvalue = parseInt(document.getElementById("startval").value, 1);
let endingvalue =  parseInt(document.getElementById("endval").value, 1);
let fizzvalue = parseInt(document.getElementById("fizzval").value, 1);
let buzzvalue = parseInt(document.getElementById("buzzval").value, 1);
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let output3 = document.getElementById('output3');
let output4 = document.getElementById('output4');

//Listeners
document.getElementById('makedivs').addEventListener("click", generateDivs);
document.getElementById('cleardivs').addEventListener("click", deleteDivs);

//Logic
function createDivs(startingvalue, endingvalue, fizzvalue, buzzvalue) {
    if (document.getElementById('divgen').childElementCount > 0) {
        return alert("Please delete existing divs first!")
    }
    const cont = document.getElementById('divgen');
    for (let i = startingvalue; i <= endingvalue; i++) {
        let creatediv = document.createElement('div');
        creatediv.setAttribute('id', 'div' + i);
        if (i % fizzvalue === 0 && i % buzzvalue === 0) {
            creatediv.setAttribute("class", 'fizzbuzz');
            creatediv.innerText = "FizzBuzz";
        } else if (i % fizzvalue === 0) {
            creatediv.setAttribute("class", 'fizz');
            creatediv.innerText = "Fizz";
        } else if (i % buzzvalue === 0) {
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
  for(i = document.getElementById('divgen').childElementCount; i > 0; i--) {
      document.getElementById('div' + i).remove();
output1.value = 0;
output2.value = 0;
output3.value = 0;
output4.value = 0;
  }
}

function generateDivs() {
createDivs(1, 60, 3, 5);
output1.value = document.getElementsByClassName('fizzbuzz').length;
output2.value = document.getElementsByClassName('fizz').length;
output3.value = document.getElementsByClassName('buzz').length;
output4.value = document.getElementsByClassName('normal').length;
}
