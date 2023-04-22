import nodemailer from "nodemailer";

const sendEmail = async ({ subject, text, to }) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.PORT,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.USER, // generated ethereal user
        pass: process.env.PASS, // generated ethereal password
      },
    });

    // send mail with defined transport object
    await transporter.sendMail({
      from: process.env.USER, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
    });
    console.log('Email sent succesfully');
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
