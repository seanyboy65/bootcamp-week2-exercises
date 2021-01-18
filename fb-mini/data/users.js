const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  firstname: casual.first_name,
  lastname: casual.last_name,
  DOB: casual.date(format = 'YYYY-MM-DD'),
  password: casual.password,
  bio: casual.sentence
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
