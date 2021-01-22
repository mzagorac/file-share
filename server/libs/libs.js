function generateCode() {
  const str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = '';

  for (let i = 0; i < 5; i++) {
    code += str[Math.floor(Math.random() * str.length)];
  }

  return code;
}

module.exports = {
  generateCode,
};
