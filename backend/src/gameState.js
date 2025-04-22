let currentSecond = 30;
let inRevealPhase = false;

function generate10DigitId() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}
const randomId = generate10DigitId();

const gameData = {
  gstatus: "1", // "1" = betting, "0" = paused (card reveal)
  timer: 30,
  match_id: "D/TId",
  roundId:randomId,
  title: "20-20 Dragon Tiger 2",
  market: [
    {
      MarketName: "Dragon",
      Runners: [{ rate: "2.00", runnerName: "Dragon" }]
    },
    {
      MarketName: "Tie",
      Runners: [{ rate: "50.00", runnerName: "Tie" }]
    },
    {
      MarketName: "Tiger",
      Runners: [{ rate: "2.00", runnerName: "Tiger" }]
    }
  ]
};

function resetGameState() {
  currentSecond = 30;
  inRevealPhase = false;
  gameData.gstatus = "1";
  gameData.timer = 30;
  const randomId = generate10DigitId();
}

function updateGameState() {
  if (inRevealPhase) {
    // During 5 sec pause
    gameData.gstatus = "0"; // Betting closed
    gameData.timer = currentSecond;
    currentSecond--;

    if (currentSecond < 0) {
      resetGameState();
    }

    return { ...gameData, phase: "card_reveal" };
  } else {
    // Betting phase
    gameData.gstatus = currentSecond > 5 ? "1" : "0";
    gameData.timer = currentSecond;
    currentSecond--;

    if (currentSecond < 0) {
      // Switch to reveal phase
      inRevealPhase = true;
      currentSecond = 5;
    }

    return { ...gameData, phase: "betting" };
  }
}

// Simulated card flip (can be replaced with actual logic)
function getCardResult() {
  const dragon = Math.floor(Math.random() * 13) + 1;
  const tiger = Math.floor(Math.random() * 13) + 1;
  let winner = "Tie";
  if (dragon > tiger) winner = "Dragon";
  else if (tiger > dragon) winner = "Tiger";
  return { dragon, tiger, winner };
}

module.exports = { updateGameState, getCardResult };
