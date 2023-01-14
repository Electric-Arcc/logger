const express = require('express')

var cookieParser = require('cookie-parser');

const app = express()

app.use(cookieParser())

app.get('/' ,(req,res)=> {
    console.log('url :',req.url);
    console.log('time :',new Date());
    console.log('cookie :',req.cookies);
    console.log()
    res.send('ok');
})

app.listen(process.env.PORT || 8000, (err) => {
    if (err) throw err;
    console.log('listening to the given port ',process.env.PORT || 8000)
    console.log()
})