
fetch('http://localhost:8080/all-covid-Data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        console.log(err);
    })

exports.module = fetch;