const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const User = require('./Users');


//Static file declaration
app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/recipedb', {useNewUrlParser: true});
let db = mongoose.connection;

//Check if connected to db
db.once('open', () =>{
    console.log('Connected to mongodb');
});

db.on('error', err =>{
    console.log(err);
});
// User.findById('5ccae50958e462901a1f9c40', (err, user) =>{
//     if(err) console.log(err);
//     user.recipes.push({title:"Scottish Mince Pie",href:"http:\/\/allrecipes.com\/Recipe\/Scottish-Mince-Pie\/Detail.aspx",ingredients:"beef bouillon granules, cornstarch, ground beef, onions, pastry, water, water"});
//     user.save(err => {
//         if(err) console.log(err);
//         console.log('success');
//     })
//     });
require('./routes')(app);

app.get('/', (req, res) => {
    res.send('PORT 5000');
});

app.get('/getusers', (req, res) => {
    User.find({}, (err, users) =>{
        res.send(users);
    })
});

app.listen(PORT, (err) => {
    if(err) {
        console.log(err)
    }
    console.log(`Listening on port ${PORT}`)
});


