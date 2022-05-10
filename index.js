const express = require('express');
const mysql = require('mysql');
const path = require('path')

const app = express();
const port = process.env.PORT || 8081;
app.use(express.json());

app.use(express.static("dist"));

//mysql conneciton 
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'seat_reservation'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/api/get-reserved-seats', function(req, res) {
    con.query("SELECT * FROM reservations", function(err, result, fields) {
        if (err) throw err;
        res.status(200).send(result);
    });
});

app.post('/api/book-reserved-seats', function(req, res) {
    var sql = "INSERT INTO reservations (seat_number, reservation_date) VALUES ?";
    var value = [];

    for (var val of req.body) {
        list = [
            val.seat_number,
            val.reservation_date
        ]
        value.push(list);
    }

    con.query(sql, [value], function(err, result) {
        if (err) throw err;
        res.status(200).send({
            "message": "successfully inserted"
        });
    });

});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);