const jwt = require("jsonwebtoken");

const genAuthToken = (user) => {
  const secretKey = process.env.JWTSECRET_KEY;

  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    secretKey
  );

  return token;
};

module.exports = genAuthToken;
