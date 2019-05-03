const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/recipe_db', {useNewUrlParser: true});
let recipesSchema = mongoose.Schema({
    title: String,
    href: String,
    ingredients: String
});

let userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    recipes: [recipesSchema]
});


let User = module.exports = mongoose.model('User', userSchema);
