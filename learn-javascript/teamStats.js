// unit: objects
// objective: create a team object with a variety of information and stats as properties

const team = {
    _players: [
      {firstName: 'Yuzu', lastName: 'Hanyu', age: 23},
      {firstName: 'Javi', lastName: 'Fern', age: 25},
      {firstName: 'Evgenia', lastName: 'Med', age: 21}
    ],
    _games: [
      {opponent: 'USA', teamPoints: 5, opponentPoints: 2},
      {opponent: 'RUS', teamPoints: 3, opponentPoints: 2},
      {opponent: 'GER', teamPoints: 9, opponentPoints: 5}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      this._players.push({
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      });
      return {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      this._games.push({
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      });
      return {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
    }
  }
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  console.log(team.players);
  console.log(team.games);