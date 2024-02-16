
const sudokus = [
    [2,5,0,7,0,0,0,1,6,0,6,0,0,0,0,4,2,8,0,0,0,1,0,0,5,0,0,5,7,0,2,1,8,9,0,0,0,0,0,3,0,9,7,8,0,9,0,3,0,0,5,1,0,0,0,0,0,8,3,0,0,7,0,4,0,2,0,0,7,0,0,0,0,0,7,0,5,0,0,3,0],
    [0,0,9,0,0,0,0,0,8,6,0,7,4,1,0,0,5,0,0,0,2,0,5,0,0,0,7,0,9,0,1,0,7,6,0,0,0,4,0,0,9,6,3,0,0,8,6,3,0,0,4,7,0,9,5,3,6,0,0,0,0,7,0,0,0,0,7,8,0,0,3,0,0,7,0,0,0,0,0,9,2],
    [0,0,0,0,5,0,1,0,0,7,0,0,1,0,0,6,0,0,2,3,1,0,8,0,0,0,0,3,1,0,0,0,6,8,0,0,0,0,7,0,0,0,0,9,5,0,4,0,0,3,7,0,0,0,0,2,5,3,0,0,0,8,7,0,0,6,9,0,0,0,3,2,4,0,3,2,0,0,0,1,0],
    [6,0,0,5,1,8,0,0,0,4,2,1,0,0,0,0,0,0,0,8,0,0,3,0,6,9,1,0,0,0,1,0,2,7,5,8,5,1,6,0,0,0,2,0,0,0,0,0,9,5,3,0,6,0,0,0,0,0,0,0,0,1,7,3,9,8,7,0,1,0,0,6,0,5,0,8,4,6,0,2,0],
    [4,0,3,0,5,2,6,0,0,0,0,2,0,8,6,3,0,0,0,0,0,0,1,3,4,2,7,1,6,0,0,0,4,0,9,0,0,3,0,0,0,5,0,4,0,0,7,0,0,9,0,5,0,0,9,0,0,0,0,0,0,0,6,3,0,0,8,2,7,0,0,1,5,8,0,3,0,0,0,0,0],
    [0,0,2,0,0,0,4,3,8,4,3,9,0,0,5,0,0,2,8,0,0,2,0,3,0,0,5,6,0,0,9,5,0,0,0,0,5,9,4,0,0,0,8,2,0,7,0,0,0,6,4,0,9,0,0,0,0,0,0,8,1,6,0,0,4,0,0,0,0,0,0,0,2,8,0,4,0,9,3,0,0],
    [0,0,0,7,3,0,0,0,9,2,8,9,0,0,0,7,0,0,7,0,0,0,8,0,2,6,0,8,0,0,0,0,5,6,0,4,6,3,0,0,0,0,0,0,0,0,0,0,8,0,9,0,0,5,0,0,8,0,5,0,3,2,6,5,0,0,2,4,0,9,0,0,3,1,0,6,0,0,0,0,7]
]
let idmapping = [
    [0,0,0],
    [1,1,1],[1,2,1],[1,3,1],[1,4,2],[1,5,2],[1,6,2],[1,7,3],[1,8,3],[1,9,3],
    [2,1,1],[2,2,1],[2,3,1],[2,4,2],[2,5,2],[2,6,2],[2,7,3],[2,8,3],[2,9,3],
    [3,1,1],[3,2,1],[3,3,1],[3,4,2],[3,5,2],[3,6,2],[3,7,3],[3,8,3],[3,9,3],
    [4,1,4],[4,2,4],[4,3,4],[4,4,5],[4,5,5],[4,6,5],[4,7,6],[4,8,6],[4,9,6],
    [5,1,4],[5,2,4],[5,3,4],[5,4,5],[5,5,5],[5,6,5],[5,7,6],[5,8,6],[5,9,6],
    [6,1,4],[6,2,4],[6,3,4],[6,4,5],[6,5,5],[6,6,5],[6,7,6],[6,8,6],[6,9,6],
    [7,1,7],[7,2,7],[7,3,7],[7,4,8],[7,5,8],[7,6,8],[7,7,9],[7,8,9],[7,9,9],
    [8,1,7],[8,2,7],[8,3,7],[8,4,8],[8,5,8],[8,6,8],[8,7,9],[8,8,9],[8,9,9],
    [9,1,7],[9,2,7],[9,3,7],[9,4,8],[9,5,8],[9,6,8],[9,7,9],[9,8,9],[9,9,9],
];
let rij1 = [];
let rij2 = [];
let rij3 = [];
let rij4 = [];
let rij5 = [];
let rij6 = [];
let rij7 = [];
let rij8 = [];
let rij9 = [];
let kolom1 = [];
let kolom2 = [];
let kolom3 = [];
let kolom4 = [];
let kolom5 = [];
let kolom6 = [];
let kolom7 = [];
let kolom8 = [];
let kolom9 = [];
let blok1 = [];
let blok2 = [];
let blok3 = [];
let blok4 = [];
let blok5 = [];
let blok6 = [];
let blok7 = [];
let blok8 = [];
let blok9 = [];

let activeId = 0;

let sudokustring = "<ul>";
for (i = 1; i <= 81; i++)
{
    sudokustring += `<li id="${i}" onclick="activateCell(${i})"><span></span></li>`;
}
sudokustring += "</ul>";
document.getElementById("sudoku").innerHTML = sudokustring;

function selectCijfer(cijfer)
{
    if(activeId == 0){
        return
    }
    if(eval("rij" + idmapping[activeId][0]).includes(cijfer)){
        alert("kan niet");
    }
    else {
        if(eval("kolom" + idmapping[activeId][1]).includes(cijfer)){
            alert("kan niet");
        }
        else 
        {
            if(eval("blok" + idmapping[activeId][2]).includes(cijfer)){
                alert("kan niet");
            }
            else {
                document.getElementById(activeId).innerText = cijfer;
                eval("rij" + idmapping[activeId][0]).push(cijfer);
                eval("kolom" + idmapping[activeId][1]).push(cijfer);
                eval("blok" + idmapping[activeId][2]).push(cijfer)
            }
        }
    }
    console.log(rij1);
    console.log(kolom1);
    console.log(blok1);
}

function activateCell(id)
{
    if(!document.getElementById(id).classList.contains("bg-secondary-subtle"))
    {
        document.getElementById(activeId).classList.remove("bg-primary-subtle");
        activeId = id;
        document.getElementById(id).classList.add("bg-primary-subtle")
    }
}

function generateSudoku()
{
    let random_nmbr = Math.floor(Math.random() * 7);
    let selected_sudoku = sudokus[random_nmbr];
    let index = 0;
    selected_sudoku.forEach(zetCijferinGrid);
}

function zetCijferinGrid(item, index)
{
    if(item == 0){
        document.getElementById(index+1).innerText = "";
        document.getElementById(index+1).classList.remove("bg-secondary-subtle");

    } else {
        document.getElementById(index+1).innerText = item;
        document.getElementById(index+1).classList.add("bg-secondary-subtle");
        if(index < 9)
            rij1.push(item);
        else if(index < 18)
            rij2.push(item);
        else if(index < 27)
            rij3.push(item);
        else if(index < 36)
            rij4.push(item);
        else if(index < 45)
            rij5.push(item);
        else if(index < 54)
            rij6.push(item);
        else if(index < 63)
            rij7.push(item);
        else if(index < 72)
            rij8.push(item);
        else
            rij9.push(item);
        if(index == 0 || index == 9 || index == 18 || index == 27 || index == 36 || index == 45 || index == 54 || index == 63 || index == 72)
            kolom1.push(item);
    }
}