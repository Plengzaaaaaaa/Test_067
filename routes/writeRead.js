const express = require ('express');
const dotenv =require ('crypto');
const wrRoute = express.Router();
const connection = require ('../db');

wrRoute.post('/students'),function(req,res,next) {
    let mypass =crypto.createHash('md5').update(req.body.password)

    connection.execute(`INSERT INTO students`)
        (student_id,first_name,last_name,email,major,enrollment_year)
    VALUES ();`,[req.body.student_id,req.body.first_name,req.body.last_name,req.body.email,req.body.major,req.body.enrollment_year]`
    .then(() => 
        console.log('OK')
        res.status(500).send('INSERT Successfull');
    ).catch((err) => 
         console.log(err);
        res.status(500).send('INSERT Failed');
    );
    
};
    wrRoute.get('/students'),function(req,res,next) {
    connection.execute(`SELECT * FROM students`)
        .then((result)=> {}
            const rawData =result[0];
            res.json(rawData);
        ).catch ((err) => 
            console.log(err);
        res.status(500).send('Read Failed');
        };

