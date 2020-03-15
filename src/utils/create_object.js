const valid = require('./file_validator')
module.exports = async (arr) => {
    try {
        const country_leng = Number(arr.shift()),
            countries = arr.splice(0, country_leng),
            data_leng = Number(arr.shift()),
            datas = arr.splice(0, data_leng)
        await valid(country_leng, countries, data_leng, datas)
        let splited, countries_obj = {}, tasks_obj = {}
        for (data of datas) {
            splited = data.split(' ')
            tasks_obj[splited[1]] ? tasks_obj[splited[1]].push(splited[2]) : tasks_obj[splited[1]] = [splited[2]]
        }
        for (country of countries) {
            splited = country.split(' ')
            countries_obj[splited[0]] = splited[1]
        }
        return { countries_obj, tasks_obj }
    } catch (err) {
 
        throw err
    }
}