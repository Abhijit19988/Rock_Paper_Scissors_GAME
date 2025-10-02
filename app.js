let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScr = document.querySelector("#user-score");//for score updation,we cant take same name variable so we took userScr as a variable.
const comScore = document.querySelector("#Computer-score");//for score updation,we cant take same name variable so we took comScore as a variable.

const genComputerChoice =()=>{
    const options = ["rock", "paper","scissors"];
    const ranIdx = Math.floor(Math.random()* 3);
    return options[ranIdx];
}




const drawGame =()=>{
    
    msg.innerText ="Game was draw !!";
    msg.style.backgroundColor ="skyblue";
}

const showWinner =(userWin, userChoice, ComputerChoice) =>{
    if (userWin){
       userScore++;
       userScr.innerText = userScore;
       msg.innerText =`You Win !! Your ${userChoice} beats ${ComputerChoice}`;
       msg.style.backgroundColor ="green";

    }else{
       computerScore++;
       comScore.innerText = computerScore;//for score updation
       
       msg.innerText =`You lost !!${ComputerChoice} beats Your ${userChoice} `;
       msg.style.backgroundColor ="red";//these two lines for msg print
    }
   };

const playGame =(userChoice) =>{
    
    //generate computer choice
    const ComputerChoice = genComputerChoice();


    if(userChoice===ComputerChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice ==="rock"){
            //scissors,paper,
            userWin= ComputerChoice ==="paper" ? false : true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=ComputerChoice ==="scissors" ?  false : true ;   
        }
        else{
            //rock,paper
            userWin=ComputerChoice==="rock" ?   false : true ;  

        }
        showWinner(userWin,userChoice,ComputerChoice);
    }

};

choices.forEach((choice) =>{
   choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});

