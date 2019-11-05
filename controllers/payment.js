
var stripe = require("stripe")("sk_test_ofzPGA24dAiQiU9yMuIsWi4I00FFrbZvX6");

const payment = async(req, res) => {
    try{
		const result = await stripe.charges.create(req.body);
        res.status(200).send({result})
	}
	catch(error){
		res.status(500).send({error})
	}
}



module.exports = {
    payment
}