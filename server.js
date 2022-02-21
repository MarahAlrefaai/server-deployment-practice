'use strict'

const express =require('express');

const app=express();//to use express methods and libraries

function start(port){
  app.listen(port,()=>{
    console.log(`running on port ${port}`)
  }) 
}
app.get('/',(req,res)=>{
  res.send('home route')
})

//now we need to export app and start 
//so we can import it anyware and use it 
 module.exports={
   app:app,
   start:start
 }