const url = 'https://codember.dev/data/encryption_policies.txt';

const response = await fetch(url);
const data = await response.text();
const lines = data.split('\n');

const dataArray = lines.map(line => {
  const parts = line.split(/[:\s-]+/);
  return {
    min: parseInt(parts[0]),
    max: parseInt(parts[1]),
    letter: parts[2],
    password: parts[3],
  };
});

let counter = 0;

dataArray.forEach(item => {
  const cantidad = item.password
    .split('')
    .filter(char => char === item.letter).length;

  if (cantidad < item.min || cantidad > item.max) {
    counter++;
  }

  if (counter === 42) {
    console.log('item', item);
  }
});
