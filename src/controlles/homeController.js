const { name } = require('ejs');
const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs')


}
const getMrdungPage = (req, res) => {
    res.render('sample.ejs')
}
const postUserPage = async (req, res) => {
    let city = req.body.city
    let name = req.body.nameUse
    let email = req.body.email
    // // let { city, name, email } = req.body

    // connection.query(
    //     `INSERT INTO 
    //     Users (email , name , city ) 
    //      VALUES(?,?,?) `,
    //     [email, name, city],
    //     function (err, results) {

    //         res.send('created user succseed')
    //     }
    // );

    // viet theo  async-await
    let [results, fields] = await connection.query(`INSERT INTO Users (email , name , city ) VALUES(?,?,?) `, [email, name, city]);
    console.log('check results', results);

    res.send('created user succseed')

    // const [results, fields] = await connection.query(`select *from Users`); async-await



}
const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}

module.exports = {
    getHomePage,
    getMrdungPage,
    postUserPage, getCreatePage,

}