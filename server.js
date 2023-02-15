const express = require("express");
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 1030);

app.use(express.json());

app.use(cors());
 
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Imraan application." });
});

app.get("/", (req, res) => {
  res.set('Content-Type', 'Application/json');
  res.status(200)
});



app.listen(app.get("port"), () => {
    console.log(`Listening for calls on port ${app.get("port")}`);
    console.log("Press Ctrl+C to exit server");
});