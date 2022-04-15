import nodemailer from 'nodemailer';

export default async function(req,res) {
    const {name,email,message,subject} = req.body;
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secureConnection: false,
        auth: {
            user: 'sverrevhoepen@outlook.com',
            pass: 'rlooywbsnmeyrupw'
        },
        tls: {
            ciphers:'SSLv3'
        }
    });
    const mailOptions = {
        from: `sverrevhoepen@outlook.com`,
        to: 'sverrevhoepen@outlook.com',
        cc: `${name} <${email}>`,
        subject: `${subject} | from: ${name}`,
        text: message,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Error sending email',
            });
        } else {
            return res.status(200).json({
                message: 'Email sent',
            });
        }

    });
}