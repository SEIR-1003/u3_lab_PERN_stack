const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/view', controller.getAllComments)
Router.get('/view/:comment_id', controller.getCommentDetails)
Router.post('/:user_id', controller.addComment)
Router.put('/:comment_id', controller.updateComment)
Router.delete('/:comment_id', controller.deleteComment)

module.exports = Router