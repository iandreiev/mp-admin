const mysql = require("mysql");
const dbConfig = require("../config/db.config");

//Create connection
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(
    error=>{
        if(error) throw error;
        console.log("Successfuly connected!");
    }
);

module.exports = connection;
