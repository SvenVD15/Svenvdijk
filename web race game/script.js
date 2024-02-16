// Selecteer de elementen van de DOM
const score=document.querySelector('.score');
const startScreen=document.querySelector('.startScreen');
const gameArea=document.querySelector('.gameArea');
const highestScoreDisplay = document.querySelector('.highestScore');

// Voeg een click eventlistener toe aan het startScreen element en wijs deze toe aan de functie 'start'
startScreen.addEventListener('click',start);

// Initialiseer variabelen
let player={speed:5,score:0};
let keys ={ArrowUp:false,ArrowDown:false,ArrowLeft:false,ArrowRight:false}
let highestScore = 0;

// Voeg event listeners toe voor het indrukken en loslaten van toetsen
document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

// Functie die wordt aangeroepen wanneer een toets wordt ingedrukt
function keyDown(e){
    e.preventDefault(); // Voorkom standaardgedrag van de browser
    keys[e.key] = true; // Markeer de toets als ingedrukt in de 'keys' object
}

// Functie die wordt aangeroepen wanneer een toets wordt losgelaten
function keyUp(e){
    e.preventDefault(); // Voorkom standaardgedrag van de browser
    keys[e.key] = false; // Markeer de toets als losgelaten in de 'keys' object
}

// Functie om te controleren of twee elementen botsen
function Collision(a,b){
    aRect=a.getBoundingClientRect();
    bRect=b.getBoundingClientRect();
    return !((aRect.bottom<bRect.top)||(aRect.top>bRect.bottom)||(aRect.right<bRect.left)||(aRect.left>bRect.right))
}

// Functie om de lijnen te laten bewegen
function moveLines(){
    let lines=document.querySelectorAll('.lines');
    lines.forEach(function(item){
        if(item.y >=900){
            item.y-=700;
        }
        item.y+=player.speed;
        item.style.top=item.y+"px";
    })
}

// Functie die het einde van het spel afhandelt
function endGame(){
    player.start=false;
    startScreen.classList.remove('hide');
    startScreen.innerHTML="Game Over <br> Final score:"+player.score+" "+"<br>Press again to restart";
    updateHighestScore();
}

// Functie om de hoogste score bij te werken
function updateHighestScore() {
    if (player.score > highestScore) {
      highestScore = player.score;
      highestScoreDisplay.innerText = "Highest Score: " + highestScore;
    }
  }
  
// Functie om vijandige auto's te laten bewegen
function moveEnemy(car){
    let enemy=document.querySelectorAll('.enemy');
    enemy.forEach(function(item){

        if(Collision(car,item)){
            console.log("Bang!");
            endGame();
        }
        if(item.y >=1000){
            item.y=-50;
            item.style.left=Math.floor(Math.random()*350)+"px";
        }
        item.y+=player.speed;
        item.style.top=item.y+"px";
    })
}

// Functie die het spelproces regelt
function gamePlay() {
    // Logboekbericht om aan te geven dat het spel begint
    console.log("here we go");

    // Zoek de auto van de speler en bepaal de afmetingen van de weg
    let car = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();

    // Controleer of het spel bezig is
    if (player.start) {
        // Beweeg de weglijnen en vijandige auto's
        moveLines();
        moveEnemy(car);

        // Controleer de toetsaanslagen van de speler en beweeg de auto dienovereenkomstig
        if (keys.ArrowUp && player.y > (road.top + 70)) {
            player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < (road.bottom - 85)) {
            player.y += player.speed;
        }
        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < (road.width - 50)) {
            player.x += player.speed;
        }

        // Update de positie van de spelerauto op het scherm
        car.style.top = player.y + "px";
        car.style.left = player.x + "px";

        // Vraag de volgende animatieframe aan voor continu spelproces
        window.requestAnimationFrame(gamePlay);

        // Verhoog de score van de speler en pas de snelheid aan
        console.log(player.score++); // Logboekbericht van de scoreverhoging
        player.score++; // Verhoog de score van de speler
        player.speed = 1 + Math.floor(player.score / 1000); // Bereken en update de snelheid van de speler
        let ps = player.score - 1; // Laatste score om weer te geven (voor esthetische doeleinden)
        score.innerText = "Score: " + ps + " Speed: " + player.speed; // Update de scoreweergave op het scherm
    }
}


// Functie om het spel te starten
function start(){
    // Verberg het startscherm
    startScreen.classList.add('hide');

    // Wis de inhoud van het spelgebied
    gameArea.innerHTML="";

    // Initialiseer spelerstatus
    player.start=true;
    player.score=0;

    // Start het spel met animatieframes
    window.requestAnimationFrame(gamePlay);

    // Maak weglijnen aan
    for(x=0;x<5;x++){
        let roadLine=document.createElement('div');
        roadLine.setAttribute('class','lines');
        roadLine.y=(x*150);
        roadLine.style.top=roadLine.y+"px";
        gameArea.appendChild(roadLine);
    }

    // Voeg spelerauto toe aan het spelgebied
    let car=document.createElement('div');
    car.setAttribute('class','car');
    gameArea.appendChild(car);

    // Initialiseer de positie van de spelerauto
    player.x=car.offsetLeft;
    player.y=car.offsetTop;

    // Voeg vijandige auto's toe aan het spelgebied
    for(x=0;x<3;x++){
        let enemyCar=document.createElement('div');
        enemyCar.setAttribute('class','enemy');
        enemyCar.y=((x+1)*350)*-1;
        enemyCar.style.top=enemyCar.y+"px";
        enemyCar.style.backgroundColor=randomColor();
        enemyCar.style.left=Math.floor(Math.random()*350)+"px";
        gameArea.appendChild(enemyCar);
    }
}

// Functie om een willekeurige kleur te genereren
function randomColor(){
    function c(){
        let hex=Math.floor(Math.random()*256).toString(16);
        return ("0"+String(hex)).substr(-2);
    }
    return "#"+c()+c()+c();
}

