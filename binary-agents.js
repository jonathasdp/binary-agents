function binaryAgent(str) {
  return str.split(/\s/).map(b => String.fromCharCode(parseInt(b, 2))).join('');
}