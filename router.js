//var ctl = require('./controller');

module.exports = function(app){
    app.get('/', function(req, res){

        res.render('index', {
            title: 'Express',
            welcome: "MongoDB Visual Manage Platform"
        });
    })
};
