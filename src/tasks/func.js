const fs = require('fs')
const create_obj = require('../utils/create_object')
const gen_avg = require('../utils/generate_avg')
const config = require('../config')

module.exports = async (path = config.path3) => {
    // check if file exists
    try {
        if (fs.existsSync(path)) {
            let treated, newArr = [],
                arr = await fs.readFileSync(path).toString().split("\n")
            // validate the file and return the objects extrated from it
            test = arr[0]
            if ((arr.length != 0) && (test != "")) {
                for (a of arr) {
                    //had to remove the \r in here
                    newArr.push(a.replace('\r', ''))
                }
                treated = await create_obj(newArr)
            }
            else throw 'File empty'
            // generate avg and return the output for the file.
            response = gen_avg(treated)
            fs.writeFile(`${path}_output.txt`, response.join('\n'), function (err) {
                if (err) {
                    throw err
                }
                else {
                    console.log('Sucesso, arquivo ' + `${path}_output.txt ` + 'criado')
                    return 'Sucesso, arquivo ' + `${path}_output.txt ` + 'criado'
                }
            })
        } else {
            throw 'Arquivo não existe'
        }

    } catch (err) {
        console.log(err)
        return err
    }
}