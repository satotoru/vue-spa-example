const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const port = 3000;
const dataPath = "./data.json";

const app = express();
app.use(bodyParser.json());

app.post("/api", (req, res) => {
  console.log(req.body);
  fs.readFile(dataPath, "utf-8", (err, data) => {
    const d = JSON.parse(data);
    d.pinnedItems.push(req.body);
    fs.writeFile(dataPath, JSON.stringify(d), err => {
      if (err) throw err;
      res.json({ message: "success!" });
    });
  });
});

app.get("/api/pinned_items", (req, res) => {
  fs.readFile(dataPath, "utf-8", (err, data) => {
    if (err) throw err;
    const d = JSON.parse(data);
    res.json(d.pinnedItems);
  });
});

app.listen(port);
