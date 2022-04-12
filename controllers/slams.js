const Slam = require('../models/Slam');

function newSlam(req, res){
    res.render('slams/new');
}

function create(req, res){
if (req.body.link) 
// const slam = new Slam(req.body);
slam.save(function(err){
    if (err) return res.render('/');
    console.log(slam);
});
}
function index(req, res){
    // res.render("index");
    Slam.find({}, function(err, slams){
        res.render('index', {
            slams
        })
    });
}

module.exports = {
    new: newSlam,
    create,
    index,
}
