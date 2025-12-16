import Post from "../models/Post.model.js";

export const getAllPosts = async () => Post.find().lean();
export const getPostById = async (id) => Post.findById(id);
export const createPost = async (data) => Post.create(data);

export const updatePost = async (id, data) => {
  const post = await Post.findByIdAndUpdate(id, data, { new: true });
  if (!post) throw new Error("POST_NOT_FOUND");
  return post;
};

export const deletePost = async (id) => {
  const post = await Post.findByIdAndDelete(id);
  if (!post) throw new Error("POST_NOT_FOUND");
};
