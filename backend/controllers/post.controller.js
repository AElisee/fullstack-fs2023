const PostModel = require("./../models/post.model");

// le controller pour récupperer les données
module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};
// --

// le controller pour faire un post
module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res.satatus(400).json({ message: "Merci d'ajouter un message !" });
  }

  const post = await PostModel.create({
    ...req.body,
  });

  res.status(200).json(post);
};
// --

//le controller pour éditer un post
module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(200).json({ message: "Ce post n'existe pas" });
  }
  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });

  res.status(200).json(updatePost);
};
// --

// le controller pour supprimer un post
module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(404).json({ error: "Ce post n'existe pas" });
  }
  await post.remove();
  res.status(200).json("message supprimé " + post);
};
// --

// le controller pour ajouter les likes
module.exports.likePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likers: req.body.userId },
      },
      { new: true }
    ).then((data) => res.status(200).json(data));
  } catch (error) {
    res.status(400).json(error);
  }
};

// le controller pour retirer les likes
module.exports.dislikePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likers: req.body.userId },
      },
      { new: true }
    ).then((data) => res.status(200).json(data));
  } catch (error) {
    res.status(400).json(error);
  }
};
