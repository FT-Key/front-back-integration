import * as postService from "../services/post.service.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "ERROR_GET_POSTS" });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "POST_NOT_FOUND" });
    }
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: "INVALID_POST_ID" });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = await postService.createPost(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: "ERROR_CREATE_POST" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await postService.updatePost(
      req.params.id,
      req.body
    );
    res.json(updatedPost);
  } catch (error) {
    if (error.message === "POST_NOT_FOUND") {
      return res.status(404).json({ message: error.message });
    }
    res.status(400).json({ message: "ERROR_UPDATE_POST" });
  }
};

export const deletePost = async (req, res) => {
  try {
    await postService.deletePost(req.params.id);
    res.json({ message: "POST_DELETED" });
  } catch (error) {
    if (error.message === "POST_NOT_FOUND") {
      return res.status(404).json({ message: error.message });
    }
    res.status(400).json({ message: "ERROR_DELETE_POST" });
  }
};
