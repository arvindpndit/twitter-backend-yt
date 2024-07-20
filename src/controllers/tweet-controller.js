const prisma = require('../config/prisma-client.js');

const create = async (req, res) => {
  const { content } = req.body;
  try {
    const tweet = await prisma.tweet.create({
      data: {
        content,
        authorId: req.user.id,
      },
    });

    return res.status(201).json({
      success: true,
      message: 'Succesfully created a new tweet',
      data: tweet,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: {},
      error: error,
    });
  }
};

module.exports = { create };

