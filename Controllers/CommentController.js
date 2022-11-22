const { User, Post, Comment } = require('../models')

const getAllComments = async (req, res) => {
  try{
    const comment = await Comment.findAll()
    res.send(comment)
  } catch (error) {
    throw error
  }
}
const getCommentDetails = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.comment_id)
    res.send(comment)
  } catch (error) {
    throw error
  }
}
const addComment = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let postId = parseInt(req.params.user_id)
    let commentBody = {userId, postId, ...req.body}
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}
const updateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    let updatedcomment = await Comment.update(req.body, {
      where: {id: commentId},
      returning: true
    })
    res.send(updatedcomment)
  } catch (error) {
    throw error
  }
}
const deleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({where: {id: commentId} })
    res.send({message: `Deleted comment with an id of ${commentId}`})
  } catch (error) {
    throw error
  }
}
module.exports = {
  getCommentDetails,
  getAllComments,
  addComment,
  updateComment,
  deleteComment
}



















