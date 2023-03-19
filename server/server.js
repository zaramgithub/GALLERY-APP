const express = require('express');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
//npm run start en server/
const app = express();
const cors = require('cors');


app.use(myconnection(mysql,
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'programacionvisual22',
        database: 'gallery'
    }    
));

app.use(cors());
app.use(require('./routes/routes'));

app.listen(9000, ()=> {
    console.log("server is running on port http://localhost:" + 9000);
});