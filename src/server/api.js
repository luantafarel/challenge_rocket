const fs = require('fs')
const express = require('express')
const readline = require('readline');
const stream = require('stream');
const create_obj = require('../utils/create_object')
const app = express()
const port = 3001
const path = '../../files/test_file.txt'

app.get('/',(req,res) => {
    
    if(fs.existsSync(path)) {
        let instream = fs.createReadStream(path), outstream = new stream, arr = []
        readline.createInterface(instream,outstream);

        rl.on('line',function(line) {
            arr.push(line);
        });

        create_obj(arr)
        
        rl.on('close',function() {
            res.send(arr)
        });
    }else {
        res.status(404).send('Arquivo não existe')
    }
})

module.exports = function start() {
    app.listen(port,() => { })
}