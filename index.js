const express = require('express');

const app = express();

app.get('/',(req,res)=>{

    res.send("HELLO WORLD")
});

app.get('/base', ()=>{
    return res.send("BASE ROUTE");
})
app.listen(process.env.PORT || 3001 , ()=>{
    console.log(`Listening to server at ${process.env.PORT || 3001}`)
});