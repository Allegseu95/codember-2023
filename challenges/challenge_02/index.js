const text =
  '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';

const compilerText = text => {
  let res = text.split('');

  const data = [];
  let value = 0;

  res.forEach(item => {
    if (item === '&') {
      data.push(value);
    } else if (item === '#') {
      value = value + 1;
    } else if (item === '@') {
      value = value - 1;
    } else if (item === '*') {
      value = value * value;
    }
  });

  return data.join('');
};

console.log(compilerText(text));
