
const eenheden = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
let random_index_left = 0;
let random_index_right = 0;

let selected_dim = document.getElementById("inp_dim");
let problem = document.getElementById("inp_left");
let unit_left = document.getElementById("eenh_left");
let solution = document.getElementById("inp_right");
let unit_right = document.getElementById("eenh_right");



function generateProblem()
{
   
    let dimension = selected_dim.value;
    random_index_left = Math.floor(Math.random() * 7);
    random_index_right = Math.floor(Math.random() * 7);
    unit_left.innerHTML = eenheden[random_index_left] + "<sup>" + dimension + "</sup>";
    unit_right.innerHTML = eenheden[random_index_right]+ "<sup>"+ dimension + "</sup>";
    problem.value = (Math.random() * 1000).toFixed(3);
}

function checkSolution()
{
    
    let verm_factor = Math.pow(10,selected_dim.value);
    let aantal_stappen = Math.abs(random_index_left - random_index_right);
    
    let correct_answer = 3.14;
    if(random_index_left > random_index_right)
    {
        correct_answer = problem.value * Math.pow(verm_factor, aantal_stappen);
    }
    else
    {
        correct_answer = problem.value / Math.pow(verm_factor, aantal_stappen);
    }
    alert("verm_factor = " + verm_factor + " en het aantal stappen = " + aantal_stappen + " het goede antwoord is: " + correct_answer );
}