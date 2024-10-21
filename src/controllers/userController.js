const User = require('../models/user');

const user_create_get = (req, res) => {
    res.render('users/create-user', { title : 'Create User' });
}

module.exports = {
    user_create_get
}