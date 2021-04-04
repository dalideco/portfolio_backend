require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const port = process.env.PORT || 5000;
const USER= process.env.USER;
const PASS = process.env.PASS;


//creating nodemailer transport
const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: USER, // generated ethereal user
      pass: PASS, // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
});



//initializing the app
const app = express();

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json())


//listening
app.post('/send',async (req,res)=>{
    const {name, email,description} =req.body;
    console.log(name+' '+email+' '+description);
    try {
        const info = await transporter.sendMail({
            from: `"PORTFOLIO SUBMIT !!" <${USER}>`, // sender address
            to: "dsahnoun28@yahoo.fr", // list of receivers
            subject: ""+name+" ✔", // Subject line
            text: ""+description, // plain text body
            html: `
                <h1>NAME: ${name}</h1>
                <h1>EMAIL: ${email}</h1>
                <p>${description}</p>
                `, // html body
        });
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }catch(err){
        console.log(err)
    }
})

app.listen(port, ()=>{
    console.log('server started');
})