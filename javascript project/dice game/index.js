let playerOneScore=0
let playerTwoScore=0
let playerTrun=true

let rollBtn=document.getElementById('roll')
let restBtn=document.getElementById('reset')


let player1ScorderBoard=document.getElementById('playeronescore')
let player2ScorderBoard=document.getElementById('playertwoscore')

let player1Board=document.getElementById('box-1')
let player2Board= document.getElementById('box-2')



  

rollBtn.addEventListener('click',function(){
     let randomNumber=Math.floor(Math.random()*6)+1    
    if(playerTrun){
          player1Board.textContent=randomNumber
         playerOneScore+=randomNumber
         player1ScorderBoard.textContent= "Score:"+playerOneScore
         player1Board.style.
         playerTrun= false
       
        }
    else{
      player2Board.textContent=randomNumber
      playerOneScore+=randomNumber
      player2ScorderBoard.textContent= "Score:"+playerOneScore
      playerTrun=!playerTrun
    }



    })










