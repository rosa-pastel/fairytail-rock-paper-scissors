function getComputerChoice(){
    const randomNumber = Math.ceil( Math.random()*3 )
    switch(randomNumber){
        case 1:
            return "elfman"
            break
        case 2:
            return "cana"
            break
        case 3:
            return "cancer"
            break
    }
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    let winner
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
    else winner = ""
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
function game(){
    let round = 0
    let keepPlaying = true
    let roundWinner
    let player = 0
    let computer = 0
    while (keepPlaying) {
        round += 1
        if (round > 4) keepPlaying = false
        roundWinner = playRound(askUser(), getComputerChoice())
        if (roundWinner === "player") player++
        else if (roundWinner === "computer") computer++
    }
    return findWinner(player,computer) + " won!"
}
function askUser(){
    const playerSelection = prompt("Wanna play as Cana, Canser or Elfman?")
    return playerSelection
}
console.log(game())