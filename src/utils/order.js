module.exports = (obj, countries) => {
    let keysSorted = Object.keys(obj).sort(function (a, b) { return obj[a] - obj[b] }), response = []
    for ( o in obj) {
        response.push(`${o} ${obj[o]}`)
    }
    for (key of keysSorted) {
        if (!countries[key]) throw 'No country with reffered id, check file'
        response.push(`${countries[key]} ${obj[key]}`)
    }
    return response
}