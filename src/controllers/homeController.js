const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDService');

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

    res.redirect('/');

    // const [results, fields] = await connection.query('select * from Users u');
};

const postUpdateUser = async (req, res) => {
    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    await updateUserById(email, city, name, userId);

    res.redirect('/');
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);

    res.render('edit.ejs', { userEdit: user });
};

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', { userEdit: user });
};

const postHandleRemoveUser = (req, res) => {
    res.send('Deleted');
};

module.exports = {
    getHomePage,
    postCreateUser,
    postUpdateUser,
    getCreatePage,
    getUpdatePage,
    postDeleteUser,
    postHandleRemoveUser,
};
