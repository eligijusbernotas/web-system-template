const User = require('../../Users');
const fetch = require('node-fetch');

module.exports = (app) => {
    app.get('/recipes/:query', (req, res) => {
        const apiUrl = new URL('http://www.recipepuppy.com/api/?');
        console.log(req.params.query);
        apiUrl.searchParams.append('q', req.params.query);

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
    app.get('/recipes', (req, res) => {
        User.recipes.find().then(recipes => {
            res.send(recipes);
        })
    });

    app.post('/recipes/update', (req, res) => {
        let user = {};
        user.recipes = req.body.user.recipes;
        console.log(req.body.user._id);
        User.findByIdAndUpdate(req.body.user._id, user, (err, user) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Updated.');
                res.send(user);
            }
        })
    });

    app.post('/recipes/add', (req, res) => {
        console.log(req.body._id);
        User.findById(req.body._id,(err, user) => {
            if(err) {
                console.log(err);
            } else {
                console.log(user);
                user.recipes.push({
                    title: req.body.title,
                    href: req.body.href,
                    ingredients: req.body.ingredients
                });
                user.save((err, user) =>{
                    if(err) console.log(err);
                    res.send(user);
                    console.log('Recipe added to user and saved to db.')
                })
            }
        });
    });

    app.delete('/recipes/:id', (req, res) => {
        if((User.recipes.findByIdAndDelete(req.params.id, err =>{
                if(err) console.log(err);
            })
        )) {
            console.log('Entry deleted.')
        } else {
            console.log('Entry not found.')
        }

    });
};
