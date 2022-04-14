const Slam = require('../models/Slam');
const User = require('../models/User');

module.exports = {
    new: newSlam,
    create,
    index,
    post,
}

function post(req, res){
const slamPost = new Slam(req.body);
slamPost.save(function(err){
    if (err) return res.render('/');
    console.log(slamPost, '<-------this is my Slam Schema');
    res.redirect('/')
})
}

function newSlam(req, res){
    res.render('slams/new');
}

function create(req, res){
    console.log(req.body, '<-----pre')
    req.body.userAvatar = req.user.avatar;
    req.body.userName = req.user.name;
    req.body.comments = [];
    console.log(req.body, '<-----post')
    const slamPost = new Slam(req.body);
if (req.body.link) 
slamPost.save(function(err){
    if (err) return res.redirect('/');
    res.redirect('/');
    
});
}
function index(req, res){
    Slam.find({}, function(err, slams){
        console.log(slams, '<----this is what slams looks like')
        res.render('index', {
            slams
        })
    });
}

