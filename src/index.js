const express = require("express");
const apiRoutes = require("./routes/index.js");

const app = express();
app.use(express.json());
const PORT = 3000;

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
