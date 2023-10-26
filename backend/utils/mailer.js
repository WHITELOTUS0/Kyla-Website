// require('dotenv').config();
// const express= require('express');
// const cors = require('cors');
const nodemailer=require('nodemailer');
const Mailgen=require('mailgen');

// // dotenv.config()  
// const app = express();
//     /** middlewares */
// app.use(express.json());
// app.use(cors());
// app.disable('x-powered-by'); 

// const port = process.env.PORT || 6060;
//     /** HTTP GET Request */
//     app.get('/', (req, res) => {
//         res.status(201).json("Health Check PASS");
//         console.log(process.env.EMAIL_USER)
//     });


//     // create reusable transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport({
//         host: 'smtp.mailtrap.io',
//         port: 2525,
//         auth: {
//             user: process.env.EMAIL_USER, 
//             pass: process.env.EMAIL_PASSWORD, 
//         }
//     });
//     // generate email body using Mailgen
//     console.log(process.env.EMAIL_USER)
//    const MailGenerator = new Mailgen({
//         theme: "default",
//         product : {
//             name: "Test Email",
//             link: 'https://mailgen.js/'
//         }
//     })
//     // define a route for sending emails
// app.post('/send-email', (req, res) => {
//         // get the recipient's email address, name and message from the request body
//         const { to, name, message } = req.body;
//         // body of the email
//         const email = {
//             body : {
//                 name: name,
//                 intro : message || 'Thank you for using the friend finder website! We\'re very excited to have you on board.',
//                 outro: 'Here are the friend details, Meet up and see where to go, we\'re very excited to help you find friends.'
//             }
//         }
//         const emailBody = MailGenerator.generate(email);
//         // send mail with defined transport object
//         const mailOptions = {
//             from: process.env.EMAIL,
//             to: to,
//             subject: 'Test Email',
//             html: emailBody
//         };
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.log(error);
//                 res.status(500).send('Error sending email');
//             } else {
//                 console.log('Email sent: ' + info.response);
//                 res.send('Email sent successfully');
//             }
//         });
//     });
//     // start the server
//     app.listen(port, () => {
//         console.log(`Server started on port ${port}`);
//     });


exports.sendEmail = async(to, name, message)=>{
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASSWORD, 
            }
        });
        // generate email body using Mailgen
        console.log(process.env.EMAIL_USER)
       const MailGenerator = new Mailgen({
            theme: "default",
            product : {
                name: "Test Email",
                link: 'https://mailgen.js/'
            }
        })
        /*  send mails */
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
                return error
            } else {
                console.log('Email sent: ' + info.response);
               return "Email Sent"
            }
        });

    } catch (error) {
        console.log('error email', error)
        return error
    }
}
