//Global variables
let startingvalue = parseInt($("#startval").value, 10);
console.log(startingvalue);
let endingvalue =  parseInt($("#endval").value, 10);
console.log(endingvalue);
let fizzvalue = parseInt($("#fizzval").value, 10);
console.log(fizzvalue);
let buzzvalue = parseInt($("#buzzval").value, 10);
console.log(buzzvalue);

//Listeners
// document.getElementById('makedivs').addEventListener("click", generateDivs());
// $('#cleardivs').on("click", deleteDivs);
//$('#divgen').click(generateDivs());


//Logic
function createDivs(startingvalue, endingvalue, fizzvalue, buzzvalue){
   for(let i = startingvalue; i <= endingvalue; i++){
    let creatediv = document.createElement('div');
    creatediv.setAttribute('id', 'div'+i);
    creatediv.append(""+i);
    $('#divgen').append(creatediv);
    if(i % fizzvalue === 0 && i % buzzvalue === 0) {
        $('#div'+ i).addClass('fizzbuzz');
    } else if (i % fizzvalue === 0) {
        $('#div'+ i).addClass('fizz');
    } else if (i % buzzvalue === 0) {
        $('#div'+ i).addClass('buzz');
    } else {
        $('#div'+ i).addClass('normal');
    }
   }
   console.log("createDivs executed");
}

//Button Functions
function deleteDivs() {
//     for (i = $('#divgen > div').length-1; i < $('#divgen > div').length; i--){
//         $('div'+ i).remove();
//     }
console.log("Divs cleared");
}

function generateDivs(){
console.log("Divs created");
createDivs(1, 30, 3, 5);
}

