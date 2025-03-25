const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("./utils/logger");
const config = require("./utils/config");
const blogRouter = require("./controllers/blog");

logger.info("Connecting to database ...");

mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    logger.info("Connected to database!");
  })
  .catch((err) => {
    logger.error(`Error connecting to database: ${err}`);
  });

app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRouter);

module.exports = app;
