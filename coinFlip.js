// This functions randomly generates either 0 or 1 and uses a ternary operatator
// to alert either "heads" or "tails" to simulate a coin toss

function flipCoin() {
  Math.floor(Math.random() * 2) ? alert("heads") : alert("tails");
}