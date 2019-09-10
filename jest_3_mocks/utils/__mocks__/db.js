const db = {
  getPost,
  getPosts
}


async function getPosts(filter) {
  return [{
    id: 30,
    text: 'mock_30'
  },
  {
    id: 55,
    text: 'MOCK_55'
  }]
}

async function getPost(id) {
  return (await getPosts(t => t.id === id))[0]
}

module.exports = db