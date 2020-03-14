const fs = require('fs')
const express = require('express')
const readline = require('readline');
const stream = require('stream');
const create_obj = require('../utils/create_object')
const gen_avg = require('../utils/generate_avg')
const config = require('../config')
const app = express()

app.get('/', async (req, res) => {
    // check if file exists
    if (fs.existsSync(config.path)) {
        let arr = [], treated, rl,
            lineReader = readline.createInterface({
                input: fs.createReadStream(config.path),
                crlfDelay: Infinity
            })

        lineReader.on('line', (line) => {
            arr.push(line)
        })
        lineReader.on('close', function () {
            // validate the file and return the objects extrated from it
            try {
                if (arr.length != 0) treated = create_obj(arr)
                else throw 'File empty'
            } catch (err) {
                return res.status(422).send(err)
            }

            // generate avg and return the output for the file.
            response = gen_avg(treated)

            fs.writeFile(`${config.path}output.txt`, response.join('\n'), function (err) {
                if (err) return res.status(500).send(err);
            })
        })
    } else {
        return res.status(404).send('Arquivo não existe')
    }
})

module.exports = function start() {
    app.listen(config.port, () => { })
}