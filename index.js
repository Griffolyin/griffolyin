const express = require('express');
const path = require('path')

const app = express();
const publicPath = path.join( __dirname,'public' )

// app.use(express.static(publicPath ))

app.get('home',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/aboutMe',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/home',(req,resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
})

app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/pagenot.html`)
})

app.listen(3000)    