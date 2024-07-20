const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({
      status: false,
      message: 'Token is not present',
      data: {},
    });
  }

  jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: false,
        message: 'Authentication failed',
        data: {},
        error: err,
      });
    }
    req.user = decoded;
    next();
  });
};

module.exports = auth;

