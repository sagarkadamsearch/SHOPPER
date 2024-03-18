const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

//Database Connection with MongoDB
mongoose.connect(process.env.MongoDBAtlasUrl);

//Api creation

app.listen(port,(error)=>{
   if(!error){
    console.log("Server is running on Port "+port)
   }
   else{
     console.log("Error: "+error)
   }
})