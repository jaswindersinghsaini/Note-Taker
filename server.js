const express = require("express");
const path = require("path");
const app = express();

const router = require('./routes/apiRouter');

const PORT = 3001;

//Implement middleware for parsing of URL encoded data
app.use(express.urlencoded({ extended: true }));

//Implement middleware to parse json data
app.use(express.json());

app.use(express.static("public"));

app.use('/api', router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});




app.listen(PORT, () => {
  console.log(`Listening to port at http://localhost:${PORT}`);
});
