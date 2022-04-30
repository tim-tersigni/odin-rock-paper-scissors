function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"]
    rand = Math.floor(Math.random() * 3)
    return options[rand]
}

function playRound(playerSelection, computerSelection) {
    const options = ["Rock", "Paper", "Scissors"]
    playerSelection = playerSelection.slice(0,1).toUpperCase() 
                      + playerSelection.slice(1).toLowerCase()
    computerSelection = computerSelection.slice(0,1).toUpperCase()
                        + computerSelection.slice(1).toLowerCase()

    // Assign values based on list position
    let playerValue = null
    let computerValue = null
    let val = 0
    for(let o of options) {
        if(playerSelection == o) {
            playerValue = val
        }

        if(computerSelection == o) {
            computerValue = val
        }
        val += 1
    }

    // Check for invalid input
    if (playerValue == null) {
        return `${playerSelection} is not an option!`
    }

    // Determine result based off of list position values
    let result = playerValue - computerValue
    if(result < 0) {
        result += 3
    }

    // Return outcome
    if(result % 2 > 0) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (result == 0) {
        return `You tie! Both picked ${playerSelection}.`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Select Rock, Paper, or Scissors")
        playRound(playerSelection, computerPlay())
    }
}