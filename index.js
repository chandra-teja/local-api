
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/posts')
.then(()=> console.log('Db connected'))
.catch((err)=>console.log('Db connection failed',err));

app.use(express.json());

const PostsRouter = require('./Routes/posts');
app.use('/posts',PostsRouter);

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log('server started'));