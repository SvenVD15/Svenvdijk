
function showTafel()
{
    let uitkomst = 0
    let teller = 1
   
    let tekst = ""
   
    let tafelvan = document.getElementById("inputTafelvan").value
   
    let tafeltot = document.getElementById("inputTafeltot").value
    while(teller <= tafeltot)
    {
        uitkomst = teller * tafelvan
        tekst += teller + " x " + tafelvan + " = " + uitkomst + "<br>"
 
        teller++
    }

document.getElementById("tafel").innerHTML = tekst
document.getElementById("tafelheader").innerHTML = "Tafel van " + tafelvan
}