//Global variables
// let startingvalue = parseInt(document.getElementById("startval").value, 10);
// console.log(startingvalue);
// let endingvalue =  parseInt(document.getElementById("endval").value, 10);
// console.log(endingvalue);
// let fizzvalue = parseInt(document.getElementById("fizzval").value, 10);
// console.log(fizzvalue);
// let buzzvalue = parseInt(document.getElementById("buzzval").value, 10);
// console.log(buzzvalue);

//Listeners
//document.getElementById('makedivs').addEventListener("click", generateDivs());
//$('#cleardivs').on("click", deleteDivs);
//$('#divgen').click(generateDivs());


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
// function deleteDivs() {
//     //     for (i = $('#divgen > div').length-1; i < $('#divgen > div').length; i--){
//     //         $('div'+ i).remove();
//     //     }
//   for(i = document.getElementById('divgen').childElementCount; i < document.getElementById('divgen').childElementCount+1; i--) {
//       document.getElementById('div' + i).remove();
//   }
//     document.getElementById('cleardivs').style.color = "red";
//     console.log(document.getElementById('divgen').childElementCount);
// }

function generateDivs() {
    console.log("Divs created");
    createDivs(1, 30, 3, 5);
}

console.log('Running');
// createDivs(1, 30, 3, 5);
// createDivs(51, 80, 3, 5);
// createDivs(201, 210, 3, 5);


