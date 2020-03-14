module.exports = (country_leng, countries, data_leng, data) => {
    if (country_leng == 0 || data_leng == 0) throw 'File format not ideal'
    if ((countries.length != country_leng) || (data.length != data_leng)) throw 'File format not ideal'
}