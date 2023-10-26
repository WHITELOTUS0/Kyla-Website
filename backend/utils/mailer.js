require('dotenv').config();
const express= require('express');
const cors = require('cors');
const nodemailer=require('nodemailer');
const Mailgen=require('mailgen');

// dotenv.config()  
const app = express();
    /** middlewares */
app.use(express.json());
app.use(cors());
app.disable('x-powered-by'); 

const port = process.env.PORT || 6060;
    /** HTTP GET Request */
    app.get('/', (req, res) => {
        res.status(201).json("Health Check PASS");
    });


    // create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: process.env.EMAILUSER, 
            pass: process.env.PASSWORD, 
        }
    });
    // generate email body using Mailgen
    console.log(process.env)
const MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Test Email",
            link: 'https://mailgen.js/'
        }
    })
    // define a route for sending emails
app.post('/send-email', (req, res) => {
        // get the recipient's email address, name and message from the request body
        const { to, name, message } = req.body;
        // body of the email
        const email = {
            body : {
                name: name,
                intro : message || 'Thank you for using the friend finder website! We\'re very excited to have you on board.',
                outro: 'Here are the friend details, Meet up and see where to go, we\'re very excited to help you find friends.'
            }
        }
        const emailBody = MailGenerator.generate(email);
        // send mail with defined transport object
        const mailOptions = {
            from: process.env.EMAIL,
            to: to,
            subject: 'Test Email',
            html: emailBody
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).send('Error sending email');
            } else {
                console.log('Email sent: ' + info.response);
                res.send('Email sent successfully');
            }
        });
    });
    // start the server
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
// var nodemailer = require('nodemailer');
// var transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "",
//       pass: ""
//     }
//   });

// var mailOptions = {
//   from: 'glorrysibomana758@gmail.com',
//   to: 'kato.steven60@gmail.com',
//   subject: 'You Matched with a new friend',
//   text: 'Hey there, we wanted to inform you that you matched with a new Friend ',
//   html: '<b>Hey there! </b><br> Your friends details are listed below<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
  
// };

// transport.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log('Message sent: %s', info.messageId);
// });

