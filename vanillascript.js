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
    for (let i = startingvalue; i <= endingvalue; i++) {
        let creatediv = document.createElement('div');
        creatediv.setAttribute('id', 'div' + i);
        creatediv.textContent = "" + i;
        document.getElementById('divgen').appendChild(creatediv);
        if (i % fizzvalue === 0 && i % buzzvalue === 0) {
            document.getElementById('div' + i).setAttribute("class", 'fizzbuzz');
        } else if (i % fizzvalue === 0) {
            document.getElementById('div' + i).setAttribute("class", 'fizz');
        } else if (i % buzzvalue === 0) {
            document.getElementById('div' + i).setAttribute("class", 'buzz');
        } else {
            document.getElementById('div' + i).setAttribute("class", 'normal');
        }
    }
    console.log("createDivs executed");
}

//Button Functions
function deleteDivs() {
    //     for (i = $('#divgen > div').length-1; i < $('#divgen > div').length; i--){
    //         $('div'+ i).remove();
    //     }
    document.getElementById('cleardivs').style.color = "red";
    console.log("Divs cleared");
}

function generateDivs() {
    console.log("Divs created");
    createDivs(1, 30, 3, 5);
}

