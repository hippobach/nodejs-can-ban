const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
};

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log('>>> email: ', email, 'name: ', name, 'city: ', city);

    connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            res.send('create user suceed!!');
        }
    );
};

module.exports = {
    getHomePage,
    postCreateUser,
};
