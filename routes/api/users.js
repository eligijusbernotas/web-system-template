const User = require('../../Users');


module.exports = (app) => {
    app.post('/user-login', (req, res) => {
        User.find({username: req.body.username, password: req.body.password}, (err, user) => {
            if(err) console.log(err);
            console.log(user);
            res.send(user);

        })
    });

    app.post('/user-register', (req, res) => {
        User.find({username: req.body.username}, (err, user) => {
            if(err) console.log(err);
            if(user.length === 0){
                let tempUser = new User({
                    username: req.body.username,
                    password: req.body.password,
                    recipes: [{
                        title: '',
                        href: '',
                        ingredients: ''
                    }]
                });
                tempUser.save().then(user => {
                    res.send(user);
                });
            } else {
                res.status(400).send(null);
            }
        });
    })
};

