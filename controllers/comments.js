
const Slam = require('../models/Slam')
function addcomment (req, res) {

    Slam.findById(req.params.id, function(err, comment) {
        // Update req.body to contain user info
        console.log(req.body, '<------pre')
        console.log(req.user, '<------user')
        req.body.commentUserAvatar = req.user.avatar;
        req.body.user = req.user._id;
        req.body.username = req.user.name;
        // Add the comment
        comment.comments.push(req.body);
        console.log(comment, '<----------helloooo')
        comment.save(function(err) {
            console.log(req.body, '<------post')
          res.redirect(`/slams/${comment._id}`);
        });
    });
}



module.exports = {
  addcomment,
}