const mongoose = require('mongoose');


const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TellmeCO' ;

mongoose.Promise = global.Promise;

mongoose.connect(uri, { useNewUrlParser: true });

mongoose.connection
    .on('error', (err)=>{
        console.log('Error : ' + err)
    })
    .once('open', ()=>{
        if(process.env.MONGODB_URI){
            console.log('successfully connected to Mongo Atlas')
        }else {
            console.log('connected in Local Mongodb Database')
        }
    });

module.exports = mongoose;