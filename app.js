const express = require("express");
require("dotenv").config();
const app = express();
const ejs = require("ejs");
const path = require("path");

// connect to the server
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("/public")); // to render static file like CSS, plain javascript, fonts, images.
// app.use(express.static("public")); // to render static file like CSS, plain javascript, fonts, images.
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs"); // set the app to use view engine to render ejs folders

// router middlewares
const indexRoute = require("./src/routes/index");
const admin = require("./src/routes/admin");
app.use("/", indexRoute);
app.use("/admin", admin);

//connect to database and spin up the server using IIFE
const connectDb = require("./src/config/dbConfig");
(async () => {
  try {
    const connected = await connectDb(process.env.MONGO_CONNECT);

    app.listen(PORT, () => {
      return console.log(`Server is listening on port: ${PORT}`);
    });
    if (connected) {
      console.log("Database connected");
    } else console.log("Database not connected");
  } catch (error) {
    console.log(error);
  }
})();
