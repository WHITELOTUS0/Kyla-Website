const nodemailer = require('nodemailer');

exports.sendEmail = async (email, password, studentNo, token) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_SECRET_KEY
            }
        });

        //our message
        message = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Account Activation",
            // text: "Please Receive",
            html: `<p>
                    <a href='http://localhost:5173/student/sample/${token}/'>Activate</a><br/>
                    <b>Password</b>:${password}<br/>
                    <b>Username</b>:${studentNo}
                </p>`
            //eric.jjumba@students.mak.ac.ug
            //benjaminjjumba@gmail.com
        };
        //send email
        await transporter.sendMail(message);
    } catch (error) {
        console.log(error.message)
    }

}