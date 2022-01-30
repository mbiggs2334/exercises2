const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require('../config');
const ExpressError = require('../expressError');

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/

router.post('/login', async(req, res, next) => {
    try {
        const { username, password } = req.body;
        if(User.authenticate(username, password)){
            User.updateLoginTimestamp(username);
            let token = jwt.sign({username: username, password: password}, SECRET_KEY);
            return res.json({ token });
        };
        throw new ExpressError('Invalid user/password', 400);
    } catch(e) {
        return next(e);
    };
});


/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

router.post('/register', async(req, res, next) => {
    try { 
        const { username, password, first_name, last_name, phone } = req.body;
        const user = await User.register({username, password, first_name, last_name, phone});
        User.updateLoginTimestamp(user.username);
        let token = jwt.sign({username: user.username, password: user.password,
                            first_name: user.first_name, last_name: user.last_name,
                            phone: user.phone}, SECRET_KEY);
        return res.json({ token });
    } catch(e) {
        return next(e);
    };
});

module.exports = router;