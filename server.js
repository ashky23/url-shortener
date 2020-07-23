require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;

// console.log(port);

connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/shorten-url", require("./routes/api/shortenUrl"));
app.use("/", require("./routes/api/redirect"));

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is listening to the port ${port}`);
  }
});
