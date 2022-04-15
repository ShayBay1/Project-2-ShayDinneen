
const Slam = require('../models/Slam')
function addcomment (req, res) {

    Slam.findById(req.params.id, function(err, comment) {
        req.body.commentUserAvatar = req.user.avatar;
        req.body.user = req.user._id;
        req.body.username = req.user.name;
        comment.comments.push(req.body);
        comment.save(function(err) {
        res.redirect(`/slams/${comment._id}`);
        });
    });
}



module.exports = {
  addcomment,
}