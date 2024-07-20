const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
  const { content, authorId } = req.body;
  try {
    const tweet = await prisma.tweet.create({
      data: {
        content,
        authorId,
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

