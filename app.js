let userscore=0;
let compScore =0;


const choices =  document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");
const genCompChoice =()=>{
    const options =["rock","paper","scissor"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
};

const drwa =()=>{
    console.log("its a drwa match ");
    msg.innerText="Game was Draw Play Again";
    msg.style.backgroundColor="black";

};

const ShowWinner=(userWin,choiceid,compchoice)=> {
    if(userWin) {
        userscore++;
        userScorePara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you Win! Yourss ${choiceid} beats  ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you loose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you Loss,${compchoice} beats Yours ${choiceid} `;
        msg.style.backgroundColor="red";
    }
};

const playGame=(choiceid)=>{
    console.log("user choice=",choiceid);

    
    // Generate computer Choice->modular
const compchoice=genCompChoice();
console.log("comp choice=",compchoice);
if(choiceid===compchoice){
    drwa(); 
}
else {
    let userWin=true;
    if(choiceid==="rock"){
        // scissor, paper
        userWin=compchoice==="paper"?false:true;

    }
else if(choiceid==="paper"){
    // rock, scissor
    userWin=compchoice==="scissor"?false:true;
}
else {
   
    // paper, rock
    userWin=compchoice==="rock"?false:true;
    
}
ShowWinner(userWin,choiceid,compchoice);
}
};

choices.forEach((choice)=>{
    console.log(choice);

    choice.addEventListener("click",()=>{
       const choiceid= choice.getAttribute("id");
        console.log("choice was  clicked", choiceid);
        playGame(choiceid);
    });
}); 



