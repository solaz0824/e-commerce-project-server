const nodemailer = require('nodemailer')
const config     = require('../config');

const contact = (req, res) => {

  const transport = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: config.user,
        pass: config.pass,
    },

  });
      const mailOptions = {
        from: req.body.email,
        to: config.user,
	    subject: req.body.subject,
	    html: `<h1>${req.body.content}</h1>`
    };
    transport.sendMail(mailOptions, (error, info) => {
		if (error) {
			return res.send (error)
	    }
	    console.log(`Message sent: ${info.response}`)         
        return res.send ("Message sent")

	});
}

module.exports = {contact} 