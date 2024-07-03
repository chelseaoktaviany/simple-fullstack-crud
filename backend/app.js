const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const morgan = require("morgan");

require("dotenv").config({ path: ".env" });

const customerRouters = require("./routers/customerRouters");

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/customers", customerRouters);

app.use(express.json());

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
