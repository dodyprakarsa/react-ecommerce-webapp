const User = require('../models/model');
const {errorHandler} = require('../helper/errorHandling');

exports.signup = (req, res) => {
    
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({user});
    });
    
    // res.json({message: 'there you are'});
};