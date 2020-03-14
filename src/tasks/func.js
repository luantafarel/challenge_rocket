const fs = require('fs')
const readline = require('readline');
const create_obj = require('../utils/create_object')
const gen_avg = require('../utils/generate_avg')
const config = require('../config')

module.exports = () => {
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
                // generate avg and return the output for the file.
                response = gen_avg(treated)
            } catch (err) {
                console.log(err)
                return err
            }
            fs.writeFile(`${config.path}_output.txt`, response.join('\n'), function (err) {
                if (err) {
                    console.log(err)
                    return err
                }
                else {
                    console.log('Sucesso, arquivo ' + `${config.path}_output.txt ` + 'criado')
                    return
                }
            })
        })

    } else {
        console.log('Arquivo não existe')
        return
    }
}