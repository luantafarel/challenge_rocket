const order = require('./order')
module.exports = (treated) => {
    // generates avg and places into an obj
    let object_avg = {}, country_id, country_task, sum
    for (country_id in treated.countries_obj) {
        country_task = treated.tasks_obj[Number(country_id)]
        sum = country_task ? country_task.reduce((a, b) => Number(a) + Number(b)) : 0
        object_avg[country_id] = country_task ? sum / country_task.length : 0
    }
    return order(object_avg, treated.countries_obj)
}