const ch = require("chalk")
const express = require('express');
const mongoose = require("mongoose")
const app = express();

//Connect Api
const posts = require("./routes/api/posts")
const profile = require("./routes/api/profile")
const users = require("./routes/api/users")

//DB Config
const db = require("./config/key").mongoURI;
//Use Routes
app.use('/api/posts',posts)
app.use('/api/profile',profile)
app.use('/api/users',users)
//Connect to MongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(()=>console.log(ch.yellow("Mongodb Connected")))
.catch(err => console.log(err))

app.get('/',(req,res)=>res.send("hello"))
const port = process.env.PORT || 5000
app.listen(port,()=>console.log(ch.yellow(`Server is running on ${port}`)))