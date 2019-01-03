const express = require("express");
const mongoose = require("mongoose");
import cors from "cors";

const initRoutes = require("./routes");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
//accessing index.html
//app.get('/',function(req,res){
//res.sendFile('C:/Users/Ajay/Desktop/webypacky/src/index.html');
//})

// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/scrapperdb",
  { useNewUrlParser: true }
);

// Routes Initialization
initRoutes(app);

// Start server
app.listen(port, () => {
  console.log("Server listening on port " + PORT);
});
