const { APP_ID } = require('@angular/core')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')

const postsRoutes = require('./routes/posts')

const app = express()

mongoose.connect('mongodb+srv://Max:5KQ3Dfd2MZgBGb3r@cluster0.zwpgm.mongodb.net/node-angular?retryWrites=true&w=majority')
.then(() => {
  console.log('Connected to cloud database successfully!')
})
.catch(() => {
  console.log('Connection to cloud database failed!')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/images", express.static(path.join("backend/images")))

app.use("/api/posts", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  )
  next()
})

app.use("/api/posts", postsRoutes)


/*
app.use("/api/posts", (req, res, next) => {

const posts = [
  {
    id: "isdfjsdfsdf",
    title: "First post!",
    content: "First content!"
  },
  {
    id: "isdfjsdfsdf",
    title: "Second post!",
    content: "Second content!"
  }
]

  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  })
})
*/
module.exports = app
