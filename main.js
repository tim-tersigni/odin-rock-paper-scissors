function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"]
    rand = Math.floor(Math.random() * 3)
    return options[rand]
}

function playRound(playerSelection, computerSelection) {
    const options = ["Rock", "Paper", "Scissors"]

    // Assign values based on list position
    let playerValue
    let computerValue
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
