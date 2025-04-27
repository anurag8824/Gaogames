const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'demoprojects',
//     // user:'root',
//     // password:'',
//     // database:'goa',
//     password: '#demoProjects#$4@',
//     database: 'goagamesclub',
//     port: 8000
// });

// module.exports = connection;

// const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost', // or '127.0.0.1' since it's on the same EC2 server
    user: 'gameuser',
    password: 'Avatior@123',
    database: 'gameavitor',
    port: 3306
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',  // XAMPP's default root password is blank
//     database: 'gameavitor',
//     port: 3306
// });

module.exports = connection;