// unit: conditionals
// project that calls racers at a certain lineup depending on their registration details

let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = false;
let runnerAge = 20;

if (earlyRunner && runnerAge > 18) {
  raceNumber += 1000;
}

if (earlyRunner && runnerAge > 18) {
  console.log(`Your race begins at 9:30 AM.
              You are runner #${raceNumber}.`);
} else if (!earlyRunner && runnerAge > 18) {
  console.log(`Your race begins at 11:00 AM.
              You are runner #${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`Your race begins at 12:30 PM.
              You are runner #${raceNumber}.`);
} else {
  console.log("Please see the registration desk.");
}