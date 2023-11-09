for (let i = 0; i < 7; i++) {
  console.log("#".repeat(i + 1));
}

for (let j = 1; j <= 100; j++) {
  if (j % 5 === 0 && j % 3 === 0) {
    console.log("FizzBuzz");
  } else if (j % 5 === 0) {
    console.log("Buzz");
  } else if (j % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(j);
  }
}

function chessboard(size = 8) {
  let string = "";
  for (let k = 1; k <= size; k++) {
    for (let l = 1; l <= size; l++) {
      if ((l % 2 === 0 && k % 2 !== 0) || (l % 2 !== 0 && k % 2 === 0)) {
        string += "#";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
}

chessboard();
