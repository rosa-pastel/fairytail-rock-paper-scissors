function getComputerChoice(){
    const randomNumber = Math.ceil( Math.random()*3 )
    switch(randomNumber){
        case 1:
            return "elfman"
        case 2:
            return "cana"
        case 3:
            return "cancer"
    }
}
function playRound(playerSelection, computerSelection){
    let winner = "nobody"
    if (playerSelection === "cana") {
            if (computerSelection === "elfman") winner = "player"
            else if (computerSelection === "cancer") winner = "computer"
    }
    else if (playerSelection === "elfman") {
            if (computerSelection === "cancer") winner = "player"
            else if (computerSelection === "cana") winner = "computer"
    }
    else if (playerSelection == "cancer") {
            if (computerSelection === "cana") winner = "player"
            else if (computerSelection === "elfman") winner = "computer"
    }
    return winner
}
function findWinner(player, computer){
    if (player > computer) {
        return "You"
    }
    else if (computer > player) {
        return "Computer"
    }
    else {
        return "Peace"
    }
}
function game(event){
    let playerSelection = event.currentTarget.id.toLowerCase()
    let computerSelection = getComputerChoice()
    vs.textContent = playerSelection.toUpperCase() + " vs " + computerSelection.toUpperCase()
    let roundWinner = playRound(playerSelection, computerSelection)
    if (roundWinner == 'player') {
        player++
    }
    else if (roundWinner == 'computer') {
        computer++
    }
    result.textContent = "Winner of the round is " + roundWinner + "!"
    if(round++ >= 5){
    gameResult.textContent = findWinner(player,computer) + " won the game!"
    round = 1
    player = 0
    computer = 0
    h1.textContent = 'GAME OVER'
    }
    else{
        gameResult.textContent = ""
        h1.textContent = "CHOOSE YOUR FIGHTER!"
        roundDiv.textContent = round
    }
}

    let round = 1
    let player = 0
    let computer = 0
    const cana = document.querySelector('#cana')
    const elfman = document.querySelector('#elfman')
    const cancer = document.querySelector('#cancer')
    const canaimg = document.querySelector('#cana>img')
    const elfmanimg = document.querySelector('#elfman>img')
    const cancerimg = document.querySelector('#cancer>img')
    canaimg.addEventListener('mouseover',()=>{
        canaimg.setAttribute('src',"./images/cana.gif")
    })    
    canaimg.addEventListener('mouseout',()=>{
        canaimg.setAttribute('src',"./images/cana.png")
    })    
    elfmanimg.addEventListener('mouseover',()=>{
        elfmanimg.setAttribute('src',"./images/elfman.gif")
    })    
    elfmanimg.addEventListener('mouseout',()=>{
        elfmanimg.setAttribute('src',"./images/elfman.png")
    })       
    cancerimg.addEventListener('mouseover',()=>{
        cancerimg.setAttribute('src',"./images/cancer.gif")
    })    
    cancerimg.addEventListener('mouseout',()=>{
        cancerimg.setAttribute('src',"./images/cancer.png")
    })       
    const result = document.querySelector('.result')
    const gameResult = document.querySelector('.game-result')
    cana.addEventListener('click', game)
    elfman.addEventListener('click', game)
    cancer.addEventListener('click', game)
    const roundDiv = document.querySelector('#round-number')
    const h1 = document.querySelector('h1')
    const vs = document.querySelector('.vs')
