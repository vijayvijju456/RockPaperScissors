const Items = ["rock","paper","scissor"];
var Pcount = 0;
var Ccount = 0;

function ComputerPlay(){

    return Items[(Math.floor(Math.random()*3))];

}
const winnerElement = document.createElement('div');

// function for each round of play
function playRound(PlayerSelection,ComputerSelection = "rock"){
   
    if(PlayerSelection==ComputerSelection){
        // return "OH No!!!  its a tie";
        winnerElement.innerHTML = `<h3> It's a Tie , Computer's Choice ${ComputerSelection}</h3>`
        h2.appendChild(winnerElement);
    }
    else if(PlayerSelection=="rock" && ComputerSelection!="paper"){
       // Pcount++;
       // return  `Nice You ${PlayerSelection} won over ${ComputerSelection} `;
       winnerElement.innerHTML = `<h3> You won Over Computer , Computer's Choice ${ComputerSelection}</h3>`
       h2.appendChild(winnerElement);
    }
    else if(PlayerSelection=="scissor" && ComputerSelection!="rock"){
       // Pcount++;
       // return  `Nice You ${PlayerSelection} won over ${ComputerSelection} `;
       winnerElement.innerHTML = `<h3> You won Over Computer, Computer's Choice ${ComputerSelection}</h3>`
       h2.appendChild(winnerElement);

    }
    else if(PlayerSelection=="paper" && ComputerSelection!="scissor"){
        winnerElement.innerHTML = `<h3> You won Over Computer , Computer's Choice ${ComputerSelection}</h3>`
       h2.appendChild(winnerElement);
    }
    else{
      //  Ccount++;
       // return `You ${PlayerSelection} lost over ${ComputerSelection}`;
       winnerElement.innerHTML = `<h3> You lost , Computer's Choice ${ComputerSelection}</h3>`
       h2.appendChild(winnerElement);
    }

}

// Game starts 
/*
function game(n){
    for(var i=1;i<=n;i++){
         
        let PlayerSelection = prompt(`Enter your ${i} choice in rock , paper or scissor`);
        let ComputerSelection = ComputerPlay();
        playRound(PlayerSelection,ComputerSelection);
            
    }
    if(Pcount>Ccount){
        console.log(`You won over computer . out of ${n}  you won ${Pcount}`);
    }
    else{
        console.log(`You lost better luck next time, out of ${n}  you won ${Pcount}`);
    }
}
*/



// getting input from the user of no of turns
/*
function myfunction(){
    const UserInputNumber = parseInt(prompt("Enter how many times you want to play"));

    game(UserInputNumber);
}

    These is odd method
*/


// new logic using DOM

const rockbtn = document.getElementById('btn1');
const paperbtn = document.getElementById('btn2');
const scissorbtn = document.getElementById('btn3');

rockbtn.addEventListener('click',game);
paperbtn.addEventListener('click',game2);
scissorbtn.addEventListener('click',game3);


function game(){
    let PlayerSelection = "rock" ;
    let ComputerSelection = ComputerPlay();
    playRound(PlayerSelection,ComputerSelection);
}


function game2(){
    let PlayerSelection = "paper" ;
    let ComputerSelection = ComputerPlay();
    playRound(PlayerSelection,ComputerSelection);
}


function game3(){
    let PlayerSelection = "scissor" ;
    let ComputerSelection = ComputerPlay();
    playRound(PlayerSelection,ComputerSelection);
}





