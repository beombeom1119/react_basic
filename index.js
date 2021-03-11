const express = require('express')
const app = express()
const port = 5000
const { User } = require("./models/User")
const bodyParser = require('body-parser');
const config = require("./config/key");
//application/x-222-from-urlencode
app.use(bodyParser.urlencoded({extended:true})); 
//application/json 값을 가져올 수 있게 해준다.
app.use(bodyParser.json());



const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify:false}).then(()=> console.log('MongoDB connected..')).catch(err=> console.log(err))


app.get('/', (req,res) => res.send('연습하는 페이지입니다.'))


app.post('/register',(req, res)=> {

    //회원가입 할때 필요한 정보들을 client에서 가져오면 그값들을 데이터베이스에 넣어준다.
    const user = new User(req.body)
    user.save((err,userInfo)=> {
        if(err) return res.json({
            succes:false,
            err
        })
        return res.status(200).json({succes:true})
    })

})




app.listen(port,() => console.log(`${port}에서 잘 열립니다.~`))

