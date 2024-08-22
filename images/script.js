let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "secissors"];
    // rock , paper, secissors
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];

};

drawGame = () => {
    msg.innerText = "Game Was Drow!, Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compchoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!. Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose!. ${compchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    // Generate Computer Choice  -> modular Way of Programming
    const compchoice = genCompChoice();
    console.log("computer choice =", compchoice);

    if (userChoice === compchoice) {
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper

            userWin = compchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compchoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compchoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compchoice);
    }

};



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    });
});