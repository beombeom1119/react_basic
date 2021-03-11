const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Beom0941:a20160941@reactbasic.wijrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify:false}).then(()=> console.log('MongoDB connected..')).catch(err=> console.log(err))


app.get('/', (req,res) => res.send('hello world'))

app.listen(port,() => console.log(`${port}에서 잘 열립니다.~`))

