require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('./prod')(app);
mongoose
  .connect(
    "mongodb+srv://postblog:post123@samplecluster.8quxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log("Db connection failed", err));

app.use(express.json());

const PostsRouter = require("./Routes/posts");
app.use("/posts", PostsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server started"));
