const User = require('./../models/userModel');

exports.gpage = async (req, res, next) => {
  try {
    const user = await User.findOne({ id: req.user.id });
    res.render('aboutus', {
      title: 'About Us',
      admin: user.username,
      src: `./../images/users/${user.photo}`
    });
  } catch (err) {
    next(err);
  }
};
