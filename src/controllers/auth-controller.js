const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma-client.js');

const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;

//app.METHOD(PATH, HANDLER)

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User doesn't exist, Please Sign up first",
        data: {},
        error: {},
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: 'Incorrect password',
        data: {},
        error: {},
        k,
      });
    }

    const token = jwt.sign(
      { username: user.username, id: user.id },
      JWT_TOKEN_SECRET,
    );
    return res.status(500).json({
      success: true,
      message: 'Logged in',
      data: { token },
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: 'Something went wrong',
      data: {},
      error: error,
    });
  }
};

const signup = async (req, res) => {
  const { username, password, firstName } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        password: await bcrypt.hash(password, 5),
        firtName: firstName,
      },
    });

    return res.status(201).json({
      success: true,
      message: 'Succesfully created a new user',
      data: user,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: 'Something went wrong',
      data: {},
      error: error,
    });
  }
};

module.exports = {
  login,
  signup,
};

