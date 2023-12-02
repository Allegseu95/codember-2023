const url = 'https://codember.dev/data/files_quarantine.txt';

const response = await fetch(url);
const data = await response.text();
const lines = data.split('\n');

const dataArray = lines.map(line => {
  const parts = line.split('-');
  return {
    name: parts[0],
    checksum: parts[1],
  };
});

let counter = 0;

dataArray.forEach(item => {
  const uniques = {};
  const letters = item.name.split('');

  letters.forEach((a, index) => {
    if (!uniques[a]) {
      uniques[a] = { letter: a, total: 0, order: index };
    }

    uniques[a].total++;
  });

  const lettersUniques = Object.values(uniques)
    .sort((a, b) => a.order - b.order)
    .filter(u => u.total === 1)
    .map(t => t.letter)
    .join('');

  if (item.checksum === lettersUniques) {
    counter++;
  }

  if (counter === 33) {
    console.log(item.checksum);
  }
});
