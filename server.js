require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scrapperdb";
// import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.use(cors());
//accessing index.html
//app.get('/',function(req,res){
//res.sendFile('C:/Users/Ajay/Desktop/webypacky/src/index.html');
//})

// Database Connection
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true }
);

// Routes Initialization
// require("./routes/userRoutes")(app);
require("./routes/webRoutes")(app);

// Start server
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
