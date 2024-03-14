const handleCalculate = (size) => {
  let n = size;
  let yAxis = n - 1;
  let xAxis = parseInt(n / 2);

  let tempSquare = Array.from({ length: n }, () => Array(n).fill(0));
  // tempSquare[yAxis][xAxis] = 1;

  // // yAxis--;
  // // xAxis++;
  // // tempSquare[yAxis][xAxis] = 2;
  // // yAxis--;
  // // xAxis++;
  // // if (xAxis == n) {
  // //   xAxis = 0;
  // // }

  // // tempSquare[yAxis][xAxis] = 3;
  // // yAxis--;
  // // xAxis++;

  // // if (yAxis == -1) {
  // //   if (tempSquare[n - 1][xAxis] == 0) {
  // //     yAxis = n - 1;
  // //     tempSquare[yAxis][xAxis] = 4;
  // //   } else {
  // //     yAxis += 2;
  // //     xAxis--;
  // //     tempSquare[yAxis][xAxis] = 4;
  // //   }
  // // }
  // // yAxis--;
  // // xAxis++;
  // // tempSquare[yAxis][xAxis] = 5;

  // // console.log(yAxis, xAxis);
  // // setMagicSquare(tempSquare);

  for (let i = 1; i <= n * n; ) {
    if (xAxis >= n && yAxis === -1) {
      yAxis = n - 1;
      xAxis = 0;
    } else {
      if (xAxis === n) {
        xAxis = 0;
      }
      if (yAxis < 0) {
        yAxis = n - 1;
      }
    }

    if (tempSquare[yAxis][xAxis] !== 0) {
      yAxis--;
      xAxis += 2;
      continue;
    }
    console.debug(yAxis, xAxis, i);

    tempSquare[yAxis][xAxis] = i++;

    yAxis--;
    xAxis++;
  }
  return tempSquare;
};

handleCalculate(7);
