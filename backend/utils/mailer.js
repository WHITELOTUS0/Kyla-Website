
const nodemailer=require('nodemailer');
const Mailgen=require('mailgen');


exports.sendEmail = async(to,name, user)=>{
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            // port: 2525,
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
                intro : 'Thank you for using the friend finder website! We\'re very excited to have you on board.',
                outro: `Here are the friend details, ${user.firstName} ${user.lastName}, ${user.email} ${user.grade}, Meet up and see where to go, we\'re very excited to help you find friends.`
            }
        }
        const emailBody = MailGenerator.generate(email);
        // send mail with defined transport object
        const mailOptions = {
            from: process.env.EMAIL,
            to: to,
            subject: 'Found you a Friend',
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
