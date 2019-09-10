const db = {
  users: [],
  posts: [{
    id: 1,
    text: 'Have a nice day'
  },
  {
    id: 2,
    text: 'Happy birthday!'
  }],

  getPost,
  getPosts
}


async function getPosts(filter) {
  return filter ? db.posts.filter(filter) : [...db.posts]
}

async function getPost(id) {
  return (await getPosts(t => t.id === id))[0]
}

module.exports = db