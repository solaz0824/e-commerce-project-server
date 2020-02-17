const User       = require('../models/users.js'); 
const bcrypt     = require('bcrypt');
const jwt        = require('jsonwebtoken');
const config     = require('../config');
const saltRounds = 10;


const register = async (req,res) => {
	const { email , password , password2, firstName, lastName } = req.body;
	if( !email || !password || ! password2 || !firstName || !lastName ) return res.send({ok: false, message:'all field are required'});
    if(  password !== password2) return res.send({ok: false, message:'passwords must match'});
    try{
    	const user = await User.findOne({ email })
        if( user ) return res.send({ok: false, message:'user already exist'});
    	const hash = await bcrypt.hash(password, saltRounds)
        const newUser = {
        	email,
            password : hash,
            admin: false,
            firstName,
            lastName
        }
        const create = await User.create(newUser)
        res.send({ok:true,message:'successfully register'})
    }catch( error ){
    	res.send({error})
    }
}

const login = async (req,res) => {
    const { email , password } = req.body;
	if( !email || !password ) return res.send({ok: false, message:'all field are required'});
	try{
    	const user = await User.findOne({ email });
    	if( !user ) return res.send({ok: false, message:'plase provide a valid email'});
        const match = await bcrypt.compare(password, user.password);
        if(match) {
           const token = jwt.sign(user.toJSON(), config.secret ,{ expiresIn:100080 });
           res.send({ok:true,token,email, message: `Hello! Welcome back! ${user.firstName}`}) 
        }else return res.send({ok: false, message:'invalid password'})
        
    }catch( error ){
    	res.send({error})
    }
}

const verify_token = (req,res) => {
    try{
       const { token } = req.body;
       const decoded   = jwt.verify(token, config.secret);
       res.send({ok: true, 
                admin:decoded.admin, 
                name: decoded.firstName, 
                lastName: decoded.lastName, 
                email: decoded.email,
                _id: decoded._id
             })
    }catch(error){
        res.send({ok: false, error})
    }
   
}

const displayUsers = async (req, res) => {
    try {
        const allUsers = await allUsers.find({})
        res.send({ok: true, allUsers})
    } catch(error) {
        res.send({ok: false, error})
    }

}
 
module.exports = { register , login , verify_token, displayUsers }