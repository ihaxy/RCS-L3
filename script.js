//Global variables
const STARTINGVALUE = parseInt($("#startval").value, 10);
const ENDINGVALUE =  parseInt($("#endval").value, 10);
const FIZZVALUE = parseInt($("#fizzval").value, 10);
const BUZZVALUE = parseInt($("#buzzval").value, 10);

//Listeners
$('#cleardivs').on("click", deleteDivs);
$('#divgen').click(generateDivs());


//Logic
function createDivs(STARTINGVALUE, ENDINGVALUE, FIZZVALUE, BUZZVALUE){
   for(let i = STARTINGVALUE; i <= ENDINGVALUE; i++){
    const CREATEDIV = document.createElement('div');
    CREATEDIV.setAttribute('id', 'div'+i);
    CREATEDIV.append(""+i);
    $('#divgen').append(CREATEDIV);
    if(i % FIZZVALUE === 0 && i % BUZZVALUE === 0) {
        $('#div'+ i).addClass('fizzbuzz');
    } else if (i % FIZZVALUE === 0) {
        $('#div'+ i).addClass('fizz');
    } else if (i % BUZZVALUE === 0) {
        $('#div'+ i).addClass('buzz');
    } else {
        $('#div'+ i).addClass('normal');
    }
   }
}

//Button Functions
function deleteDivs() {
console.log("Divs cleared");
}

function generateDivs(){
console.log("Divs created");
createDivs(1, 100, 3, 5);
}