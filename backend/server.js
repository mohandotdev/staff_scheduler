const express = require('express');
const app = express();
const PORT = 5000;

app.get('/',(req,res) =>{
    res.send("Hello I am expressJS");
})

app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`);
})