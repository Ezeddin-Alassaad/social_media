const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/posts');
// Connect to DB
const connectDB = require('./db');
require('dotenv').config();
connectDB();
 
app.use(express.json()); 

app.use('/api',userRouter);
app.use('/api', authRouter);
app.use('/api',postRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
 
module.exports = app;