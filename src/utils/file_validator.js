module.exports = async (country_leng, countries, data_leng, data) => {
    if (isNaN(data_leng) || isNaN(country_leng)) throw 'File format is not correct'
    else if (country_leng == 0 || data_leng == 0) throw 'File format is not correct'
    else if ((countries.length != country_leng) || (data.length != data_leng)) throw 'File format is not correct'
}