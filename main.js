function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"]
    rand = Math.floor(Math.random() * 3)
    return options[rand]
}

console.log(computerPlay())