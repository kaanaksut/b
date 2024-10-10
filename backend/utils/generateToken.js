const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token 30 gün boyunca geçerli olacak
  });
};

module.exports = generateToken;
