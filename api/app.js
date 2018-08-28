const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
// log file 
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags : 'a'});
//env veriables
require('dotenv').config();

const port = process.env.PORT || 3000 ;
const app = express();

//db connection
const mongoose  = require('./db/mongoose');
//Model
const Restaurant = require('./model/restaurant');
//middleware 
app.use(cors({origin : true}));
app.use(morgan('combined', {stream : accessLogStream}));
app.use(bodyParser.json());
//Get call for getting all Restaurants
app.get('/api/restaurants', (req, res)=>{
    Restaurant.find({}, {dishItems : 0, __v : 0 })
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).json({ msg : 'Unable to Get Data'})
    })
})
//Get call for getting restaurant by ID
app.get('/api/restaurant/:id', (req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
         return res.status(400).json({ msg : 'Object ID is not valid '})  
    }
    const objId = mongoose.Types.ObjectId(req.params.id);
    //const restaureantId =req.params.id;
    Restaurant.findById(objId)
        .then((data)=>{
            if(data){
               return res.status(200).json(data)
            }
            res.status(400).json({ msg : 'No Data Found'})
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({ msg : 'Unable to Get Data'})
        })
})
//Post call for importing data
app.post('/api/import',(req,res)=>{
    const data = req.body;
    if(data === undefined){
       return res.status(400).json({msg : 'no data imported'});
    }

    data && Restaurant.insertMany(data)
    .then(()=>{
        return res.status(200).json({msg : 'data imported'})
    })
    .catch((err)=>{
        return res.status(400).send(err);
    })
})

app.listen(port, ()=>{
    console.log(`server is listering in Port ${port}`);
})