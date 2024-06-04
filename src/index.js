const express = require("express");

const app = express();
const PORT = 3000;

//app.METHOD(PATH, HANDLER)

app.get("/", (req, res) => {
  res.send("hello arvind");
});

app.get("/user", (req, res) => {
  res.send("hello user, how're you");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
