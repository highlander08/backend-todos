const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/api", (req, res) => {
  return res.json("up downloaded");
});
app.listen(8080, (req, res) => console.log("porta rondando 8080"));
