exports.showIndex = (req, res, next) => {
    res.send('ruunning node api');
};

const Post = require('../model/post_model');

exports.addPost = (req, res, next) => {
  const post = new Post({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image
  });
  post.save()
  .then(() => {
      res.send('post added succesfully!');
  }).catch(err => {
      res.status(400).send(err);
  })
};