const Items = ["rock","paper","scissor"];
var Pcount = 0;
var Ccount = 0;

function ComputerPlay(){

    return Items[(Math.floor(Math.random()*3))];

}


function playRound(PlayerSelection,ComputerSelection){

    if(PlayerSelection==ComputerSelection){
        return "OH No!!!  its a tie";
    }
    else if(PlayerSelection=="rock"){
        Pcount++;
        return  `Nice You ${PlayerSelection} won over ${ComputerSelection} `;
    }
    else if(PlayerSelection=="scissor" && ComputerSelection!="rock"){
        Pcount++;
        return  `Nice You ${PlayerSelection} won over ${ComputerSelection} `;

    }
    else{
        Ccount++;
        return `You ${PlayerSelection} lost over ${ComputerSelection}`;
    }

}
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


function myfunction(){
    const UserInputNumber = parseInt(prompt("Enter how many times you want to play"));

    game(UserInputNumber);
}





