const express = require('express');
const personRoutes = express.Router();
var mysql = require('mysql');
// Require Business model in our routes module 

console.log('Get connection ...');

var conn = mysql.createConnection({
    database: 'testdb',
    host: "localhost",
    user: "root",
    password: "123qwe"
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});




// Defined store route
personRoutes.route('/add').post(function (req, res) {
   
    var person = {
        fullname: req.body.FullName,
        address: req.body.Address,
        age: Number(req.body.Age)
    }
    let sql = "INSERT INTO persons SET ?";
    conn.query(sql, person, (err, results) => {
        if (!err) {
            console.log('Create success.');
            res.status(200).json({ 'person': 'person in added successfully' });
        } else {
            console.log('Create Errr.');
            res.status(400).send("unable to save to database");
            console.log(err);
        };
        // res.redirect(`/users`); 
    });

});

// Defined get data(index or listing) route
personRoutes.route('/').get(function (req, res) {
    var sql = "SELECT * FROM persons";
    conn.query(sql, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});

// Defined edit route
personRoutes.route('/edit/:id').get(function (req, res) {
    let id = Number(req.params.id);
    var sql = "SELECT * FROM persons where id=?";
    conn.query(sql, id,function (err, results) {
        if (err) throw err; 
        res.send(results[0]);
    });
});

//  Defined update route
personRoutes.route('/update/:id').post(function (req, res) {
    let id = Number(req.params.id);
    var sql = "SELECT * FROM persons where id=?";
    conn.query(sql, id,function (err, results) {
        if (err) throw err; 
        if(results.length<=0){
            res.send("404");
        }else{ 
            var updateSql = `UPDATE persons SET FullName ='${req.body.FullName}', Address = '${req.body.Address}', Age = ${req.body.Age} WHERE ID=${id} `
            conn.query(updateSql,function (err, results) {
                if (err) throw err;
                res.send(results);
            });
        }
    });
});

// Defined delete | remove | destroy route
personRoutes.route('/delete/:id').post(function (req, res) {
    let id = Number(req.params.id);
    var sql = "DELETE FROM `testdb`.`persons` WHERE id=?";
    conn.query(sql, id,function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});

module.exports = personRoutes;