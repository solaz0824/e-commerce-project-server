const nodemailer = require('nodemailer')
const orderEmailBody = require('./orderEmailBody')
const updateStock = require('./updateStock.js')
const config     = require('../config.js');
//userData.email, userData.name, newOrder._id, res, total, findCart

const orderEmail = (email, name, _id, res, total, cart) => {
    
    const transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '',
            pass: '',
        },
    });
    console.log('_________________________________________',email, name, _id, total, cart)
    const mailOptions = {
        from: 'solaz0824@gmail.com',
        to: 'estefanodi2009@gmail.com',
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
