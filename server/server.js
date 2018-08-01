const path = require('path');
const express = require('express');
const app = express();
const publicPatch = path.join(__dirname, '..','public');

app.use(express.static(publicPatch));

app.get('*', (req, res)=>{
    req.sendFile(path.join(publicPatch , 'index.html'));
})

app.listen(3000, ()=>{
    console.log('server is listening to port 3000');
})