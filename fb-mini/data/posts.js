const casual = require('casual')

casual.define('post', () => ({
    user_id: casual.uuid,
    text: casual.sentence,
    date: casual.date(format = 'YYYY-MM-DD'),
    likes: casual.integer
}))


const postData = []

for (let i = 0; i < 20; ++i) {
  postData.push(casual.post)
}

module.exports = postData
