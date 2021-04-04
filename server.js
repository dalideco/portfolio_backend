const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const USER= process.env.USER;
const PASS = process.env.PASS;
// dsahnoun28@yahoo.fr

const app = express();

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json())

app.post('/send',(req,res)=>{
    const {name, email,description} =req.body;
    console.log(name+' '+email+' '+description);
})

app.listen(port, ()=>{
    console.log('server started');
})