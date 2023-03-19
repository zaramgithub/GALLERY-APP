const express = require('express');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

const app = express();

app.use(myconnection(mysql,
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'programacionvisual22',
        database: 'gallery'
    }    
));

app.use(require('./routes/routes'));

app.listen(9000, ()=> {
    console.log("server is running on port http://localhost:" + 9000);
});