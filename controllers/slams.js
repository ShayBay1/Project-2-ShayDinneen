const Slam = require('../models/Slam');
const User = require('../models/User');

function show (req, res){
Slam.findById(req.params.id, function(err, slam){
    // 
        res.render('slams/show', {slam, title: 'Slam Details'});
    });
  }; 


// future function for adding comment to slam post
// req.body.userId = req.user_id;
    // req.body.userName = req.user.name;
    // slam.comments.push(req.body);
    // comment.save(function(err){

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

module.exports = {
    new: newSlam,
    create,
    index,
    show,
}