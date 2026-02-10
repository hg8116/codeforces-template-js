'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readline() {
  return inputString[currentLine++];
}

// Change code here
function main() {
  const n = Number(readline())
  // const arr = readline().split(' ').map(Number)

  console.log("answer:", n)
}


// use npm run run command to run the code (too many runs for now but works)

