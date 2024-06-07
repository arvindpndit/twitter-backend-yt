const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
const PORT = 3000;

const prisma = new PrismaClient();

//app.METHOD(PATH, HANDLER)

app.post("/signup", async (req, res) => {
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
      message: "Succesfully created a new user",
      data: user,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Something went wrong",
      data: {},
      error: error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
