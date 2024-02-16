


let oplB2 = 0;
let oplC2 = 0;
let oplB3 = 0;
let oplC3 = 0;

function solveProblem()
{
    let celA1 = parseInt(document.getElementById("inp_A1").value);
let celD2 = parseInt(document.getElementById("inp_D2").value);
let celD3 = parseInt(document.getElementById("inp_D3").value);
let celD1 = parseInt(document.getElementById("inp_D1").value);
let celC4 = parseInt(document.getElementById("inp_C4").value);
let celB4 = parseInt(document.getElementById("inp_B4").value);

    let decision = true;
    let gok = 1;
    while(decision)
    {
        oplB2 = gok;
        oplC2 = celD2 - oplB2;
        oplB3 = celB4 - oplB2;
        oplC3 = celA1 - oplB2;
    
        if(oplB3 + oplC2 == celD1 && oplB3 + oplC3 == celD3 && 
            oplC2 + oplC3 == celC4 )
            {
              
                decision = false;
            }
            else
            {
               
                gok++;
            }
    }
    document.getElementById("opl_B2").value = oplB2;
    document.getElementById("opl_C2").value = oplC2;
    document.getElementById("opl_B3").value = oplB3;
    document.getElementById("opl_C3").value = oplC3;
}