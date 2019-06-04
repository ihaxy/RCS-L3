//Global variables
let startingvalue = parseInt($("#startval").value, 1);
let endingvalue =  parseInt($("#endval").value, 1);
let fizzvalue = parseInt($("#fizzval").value, 1);
let buzzvalue = parseInt($("#buzzval").value, 1);

//Listeners
$('#cleardivs').on("click", deleteDivs);
$('#makedivs').click(generateDivs());


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
createDivs(startingvalue, endingvalue, fizzvalue, buzzvalue);
}

