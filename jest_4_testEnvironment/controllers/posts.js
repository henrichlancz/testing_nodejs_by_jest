const db = require('../utils/db')

async function getPosts(req, res) {
  const posts = await db.getPosts()
  if (posts) {
    return res.json({posts})
  } else {
    return res.status(404).send()
  }
}

async function getPost(req, res) {
  const post = await db.getPost(req.params.id)
  if (post) {
    return res.json({post})
  } else {
    return res.status(404).send()
  }
}

async function createPost(req, res) {
  const post = await db.insertPost(req.body)
  if (post) {
    return res.json({post})
  } else {
    return res.status(404).send()
  }
}

module.exports = {getPosts, getPost, createPost}
