let userscore=0;
let compScore =0;


const choices =  document.querySelectorAll(".choice");
const genCompChoice =()=>{
    const options =["rock","paper","scissors"];
    Math.random();
}


const playGame=(choiceid)=>{
    console.log("user choice=",userchoice);
     // Generate computer Choice->modular
};

choices.forEach((choice)=>{
    console.log(choice);

    choice.addEventListener("click",()=>{
       const choiceid= choice.getAttribute("id");
        console.log("choice was  clicked", choiceid);
        playGame(choiceid);
    });
}); 



