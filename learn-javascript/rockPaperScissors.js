// unit: functions
// a project to imitate a rock-paper-scissors game between a user and the computer

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log("Please provide a valid input.");
    }
  }
  
  const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "This game is a tie!";
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return "The computer won!";
      } else {
        return "The user won!";
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return "The computer won!";
      } else {
        return "The user won!";
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "The computer won!";
      } else {
        return "The user won!";
      }
    }
  }
  
  function playGame() {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log(`The user has chosen ${userChoice}`);
    console.log(`The computer has chosen ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  