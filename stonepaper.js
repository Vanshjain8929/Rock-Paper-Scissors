let userScore=0;
let computerScore=0

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uScore=document.querySelector("#user-score");
const cScore=document.querySelector("#comp-score");

const genComputerChoice=()=>{
    const choiceOption=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return choiceOption[randIdx]; 
    
}

const draw=()=>{
    msg.textContent="Game was Draw";
    msg.style.backgroundColor="#0C0C29";
    
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin) {
        userScore++;
        uScore.textContent=userScore
        msg.textContent=`You win!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="red"
    
    }else{
        computerScore++;
        cScore.textContent=computerScore
        msg.textContent=`You lose,${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="pink"

    }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice );
    const compChoice=genComputerChoice();
    console.log("computer choice =",compChoice );

    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }        
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
});

