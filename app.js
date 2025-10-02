let userscore=0;
let compScore =0;


const choices =  document.querySelectorAll(".choice");
const genCompChoice =()=>{
    const options =["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
};

const drwa =()=>{
    console.log("its a drwa match ");

};

const ShowWinner=(userWin)=> {
    if(userWin) {
        console.log("you win");
    }
    else{
        console.log("you loose");
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
ShowWinner(userWin);
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



