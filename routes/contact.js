const router = require("express").Router()
require('dotenv').config()
const nodemailer = require('nodemailer');


router.post("/api/contact", (req, res) => {

    //Sending an email
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    let mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_RECEIVER,
        subject: req.body.subject,
        text: "From: " + req.body.name + '\n' + "Message: " + req.body.message
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send({success: false})
        } else {
            console.log('Email sent: ' + info.response);
            res.sendStatus({success: true})
        }
        
    }) 

    

})

module.exports = {
    router
}