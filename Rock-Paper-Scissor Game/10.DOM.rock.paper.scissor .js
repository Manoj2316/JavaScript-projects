let score=
JSON.parse(localStorage.getItem('score'))||{
        wins:0,
        loses:0,
        ties:0,
  };
  

//console.log(score);
/*if(!score){
    score={
        wins:0,
        loses:0,
        ties:0,
  };
}*/
UpdateScoreElement();
//UpdateMoveElement();
//UpdateResultElement('Yet To Start');



function playgame(playerMove){

const computerMove=PickComputerMove();
console.log(computerMove);
    
    


    if(playerMove==='ROCK'){
        if(computerMove==='ROCK'){
            result='TIE!';
        }
        else if(computerMove==='PAPER'){
            result='YOU LOSE!'
        }
        else if(computerMove==='SCISSOR'){
            result='YOU WON!';
        }
       
        console.log(result);
      

    }
    else if(playerMove ==='PAPER'){

        if(computerMove==='ROCK'){
            result='YOU WON!';
        }
        else if(computerMove==='PAPER'){
            result='TIE!';
        }
        else if(computerMove==='SCISSOR'){
            result='YOU LOSE!';
        }
      
        console.log(result);
      

    }
    else if(playerMove ==='SCISSOR'){

        if(computerMove==='ROCK'){
            result='YOU LOSE!';
        }
        else if(computerMove==='PAPER'){
            result='YOU WON!'
        }
        else if(computerMove==='SCISSOR'){
            result='TIE!';
        }
       
        console.log(result);
    }
/*   else if(playerMove==='RESET'){
    score.wins=0;
    score.loses=0;
    score.Ties=0;
    localStorage.removeItem('score')

      
    }*/
   

    if (result==='YOU WON!'){
        score.wins += 1;
    }
    else if(result==='YOU LOSE!'){
        score.loses += 1;
    }
    else if(result==='TIE!'){
        score.ties += 1;
    }
    console.log(score);
    localStorage.setItem('score',JSON.stringify(score));
   // console.log(set)

   UpdateScoreElement();
   UpdateMoveElement(playerMove,computerMove);
   UpdateResultElement(result);
  
   
   
    // alert(` 

    // YOU PICKED      :       ${playerMove}.

    // COMPUTER PICKED :       ${computerMove}.
    
    // SO              :       ${result}
    
    // wins            :       ${score.wins}, 
    // loses           :       ${score.loses}, 
    // Ties            :       ${score.ties},
                            
    // `);


}

function UpdateScoreElement(){
document.querySelector('.js-score')
     .innerHTML=
       ` wins            :       ${score.wins}
                        ||
         loses           :       ${score.loses}
                        ||
         Ties            :       ${score.ties}`;
 }
function UpdateMoveElement(playerMove,computerMove){
    document.querySelector('.js-moves').innerHTML=
        `YOU PICKED : <img src="Img/${playerMove}.png" alt="Yet To Start" 
        class="move-icon uu">

                    

         COMPUTER PICKED : <img src="Img/${computerMove}.png" alt="Yet To Start" class="move-icon "> `
        
}
function UpdateResultElement(result){
    document.querySelector('.js-result').innerHTML=
    `Result : ${result}`;
}

function PickComputerMove(){
const randomnumber=Math.random();
//console.log(randomnumber);
let result='';
let computerMove='';
    if(randomnumber>=0 && randomnumber<1/3){
        computerMove=('ROCK');
        
    }
    else if(randomnumber>=1/3 && randomnumber<2/3){
        computerMove=('PAPER');
        
    }
    else if(randomnumber>=2/3 && randomnumber<1){
        computerMove=('SCISSOR');
        
    }
    return computerMove;

}

function resetScore() {
        score.wins=0;
        score.loses=0;
        score.ties=0;
        localStorage.removeItem('score');

        UpdateScoreElement();
        UpdateMoveElement();
        UpdateResultElement('Yet To Start');


        alert('Score has been reset');
}

