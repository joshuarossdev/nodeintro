console.log('Hello, world!')

  function do_math(num1, operator, num2) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*' || operator === 'x' || operator === 'X') {
      return num1 * num2;
    } else if (operator === '/') {
      return num1 / num2;
    }
  }
  var num1 = parseInt(process.argv[2], 10);
  var num2 = parseInt(process.argv[4], 10);
  var operator = process.argv[3];
  var answer = do_math(num1, operator, num2);
  console.log(answer);
