//Function Used to obtain the simulated user input 
const getUserChoice = function(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput;
    } else if(userInput == 'bomb')
    {
      console.log('Not a valid input');
    }
    return userInput;
  };
  
 //Function used to obtain the Computers chose which is randomly generated 
    const getComputerChoice = function(chance) {
        switch (Math.floor(Math.random() * 3)) {
        case 2: 
        console.log('PC picked rock ');
          return 'rock';
        case 1: 
        console.log('PC picked scissors');
          return 'scissors';
        case 0:
        console.log('PC picked paper');
          return 'paper';
                } 
    };
  //Function Used to determine who wins the rockpaperscissors game based on the choices presented
    const determineWinner = (userChoice , computerChoice) => {

      if (userChoice == computerChoice) {
          return console.log('Tie!');
      } else if (userChoice === 'rock' && computerChoice == 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper') {
      console.log('User Wins')
      } else if (userChoice === 'rock' && computerChoice == 'paper' || userChoice === 'paper' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'rock'){
      console.log('PC Wins')
    } else {
    console.log('Hold on buddy what they fighting with we cannot sanction this match')
  
    }
    }

  //Function Used to play the game, again has not been made to take in user input yet since still simulation and im learning more about it 
  const playGame = function() {
      const userChoice = getUserChoice('bomb');
      console.log('User picked ' + `${userChoice}`);
      const computerChoice = getComputerChoice();
      determineWinner(userChoice, computerChoice);
    }
  
    console.log(' ROCKER TOURNAMENT ');
    playGame();
  