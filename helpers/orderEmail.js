const nodemailer = require('nodemailer')
const orderEmailBody = require('./orderEmailBody')
const updateStock = require('./updateStock')
const config     = require('../config');
//userData.email, userData.name, newOrder._id, res, total, findCart

const orderEmail = (email, name, _id, res, total, cart) => {
    console.log(email)
    const transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: config.user,
            pass: config.pass,
        },
    });
    const mailOptions = {
        from: config.user,
        to: email,
	    subject: "New message from " + name,
	    html: orderEmailBody(name, _id, total, cart)
    };
    transport.sendMail(mailOptions, (error, info) => {
		if (error) {
			return res.send (error)
	    }
	    console.log(`Message sent: ${info.response}`);
        return updateStock(cart, res, email, name, total, _id)          
       

	});
}

module.exports = orderEmail
