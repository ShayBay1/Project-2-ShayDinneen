const Slam = require('../models/Slam');
const User = require('../models/User');

function newSlam(req, res){
    res.render('slams/new');
}
function create(req, res){
    req.body.userAvatar = req.user.avatar;
    req.body.userName = req.user.name;
    req.body.comments = [];
    const slamPost = new Slam(req.body);
        if (req.body.link) 
    slamPost.save(function(err){
        if (err) return res.redirect('/');
    res.redirect('/');   
});
}
function deleteSlam (req, res){
    Slam.findOneAndDelete(
        {_id: req.params.id}, function(err) {
            res.redirect('/slams')
        }
    )
}
function index(req, res){
    Slam.find({}, function(err, slams){
        res.render('index', {slams})
    });
}
function show (req, res){
    Slam.findById(req.params.id, function(err, slams){
    res.render('slams/show', {slams, title: 'Slam Details'});
    });
}; 

module.exports = {
    new: newSlam,
    create,
    index,
    show,
    deleteSlam,  
}