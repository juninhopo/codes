const jwt = require('jsonwebtoken')

const private_key = `key`

const base_url = 'url'
const now = new Date()

const payload = {
    // payload
}

const token = jwt.sign(payload, private_key, { algorithm: 'RS256' })

console.log(token)  

