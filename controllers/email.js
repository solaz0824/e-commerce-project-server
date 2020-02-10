const nodemailer = require('nodemailer')
const config = require('../config');

const contact = (req, res) => {

  const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '',
      pass: '',
    },

  });


  const mailOptions = {
    from: 'solaz0824@gmail.com',
    to: 'estefanodi2009@gmail.com',
    subject: req.body.subject,
    html: `<h1>${req.body.content}</h1>`
  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.send(error)
    }
    console.log(`Message sent: ${info.response}`)
    return res.send("Message sent")

  });
}

module.exports = { contact } 