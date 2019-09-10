const postController = require('../controllers/posts')

function setupPostRoutes(router) {
  router.get('/', postController.getPosts)
  router.get('/:id', postController.getPost)
  router.post('/', postController.createPost)
}

module.exports = setupPostRoutes
