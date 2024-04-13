let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let startingCompScore=document.querySelector("#computer-score");
let startingUserScore=document.querySelector("#user-score");

const genCompChoice=()=>{
    const options=["stone","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame=() =>{
    msg.innerText="Game Draw!";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin,userChoice,compChoice)=>{

    if(userWin){
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        startingUserScore.innerText=userScore;
    }else{
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        startingCompScore.innerText=compScore;

    }
}

const playGame=(userChoice) =>{
    const compChoice=genCompChoice();
    

    if(userChoice===compChoice){
        //game draw
        drawGame();
    } else{
        let userWin=true;
        if(userChoice==="stone"){
            //paper,scissor
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //stone,scissor
            userWin=compChoice==="stone"?true:false;
        }else{//userChoice=scissor
            //stone,paper
            userWin=compChoice==="stone"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
    })
})