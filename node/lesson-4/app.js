const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

fs.createReadStream('./kepler_data.csv')
    .pipe(parse({
        comment: "#",
        columns: true
    }))
    .on('data', (data) => {
        results.push(data)

    })
    .on('end', () => {
        console.log('[results]', results);
    })
    .on('error', (err) => {
        console.log('[err.message]', err.message);
    })