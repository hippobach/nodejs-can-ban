const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log('>>> email: ', email, 'name: ', name, 'city: ', city);

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city]
    );

    res.send('create user succeed');

    // const [results, fields] = await connection.query('select * from Users u');
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const getUpdatePage = (req, res) => {
    const userId = req.params.id;
    res.render('edit.ejs');
};

module.exports = {
    getHomePage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
};
