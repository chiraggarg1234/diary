const express=require('express');
const mongoose=require('mongoose');

const app=express();

const port=process.env.PORT || 5000;

app.get('/',(req,res)=> {
    res.send('its ok');
});

app.listen(port,function(){
	console.log(`server started on port ${port}`)
});