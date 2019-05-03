const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.param('id', (req, res, next, id) => {
   next();
});

app.get('/:id', (req, res) => {
    const apiUrl = new URL('http://www.recipepuppy.com/api/?');
    console.log(req.params.id);
    apiUrl.searchParams.append('q', req.params.id);

    (fetch(apiUrl.toString())
            .then(res => res.json())
            .then(data => {
                console.log(data);
                res.send({data:data['results']});
            })
            .catch(err => {
                console.log(err);
})
    )
});

app.listen(5000, (err) => {
    if(err) throw  err;
    console.log('Sever up...')
});