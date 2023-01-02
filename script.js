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
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
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
    let playerSelection = event.currentTarget.id
    let roundWinner = playRound(playerSelection, getComputerChoice())
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
    }
    else{
        gameResult.textContent = ""
    }
}

    let round = 1
    let player = 0
    let computer = 0
    const cana = document.querySelector('#cana')
    const elfman = document.querySelector('#elfman')
    const cancer = document.querySelector('#cancer')
    const result = document.querySelector('.result')
    const gameResult = document.querySelector('.game-result')
    cana.addEventListener('click', game)
    elfman.addEventListener('click', game)
    cancer.addEventListener('click', game)