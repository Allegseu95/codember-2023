const url = 'https://codember.dev/data/database_attacked.txt';

const response = await fetch(url);
const data = await response.text();
const lines = data.split('\n');

const dataArray = lines.map(line => {
  const parts = line.split(',');
  return {
    id: parts[0],
    username: parts[1],
    email: parts[2],
    age: Number(parts[3]),
    location: parts[4],
  };
});

const invalidData = dataArray.filter(item => {
  const regex = /[^a-zA-Z0-9]/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (
    item.id === '' ||
    regex.test(item.id) ||
    item.username === '' ||
    regex.test(item.username) ||
    item.email === '' ||
    !emailRegex.test(item.email) ||
    isNaN(item.age) ||
    (item.location !== '' && typeof item.location !== 'string')
  ) {
    return item;
  }
});

const secretText = invalidData.map(item => item.username.charAt(0)).join('');

console.log('secretText', secretText);
