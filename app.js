const express = require ('express');
const dotenv =require ('dotenv');

const app =express();
dotenv.config;

const PORT =process.env.NODE_PORT ||3067;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const writeRead = require ('./routes/writeRead.js');
const updateDelete =require ('./routes/updateDelete.js');

app.use('/wr',writeRead);
app.use('/ud',updateDelete);

app.use((req,res,next) => {
    res.sendstatus(404);
});

app.listen (POST,() => {
    console.log('Server running on port :(${PORT})');
});
