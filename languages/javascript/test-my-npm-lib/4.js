const channel = require('rest-to-jsonrpc-2.0')

const channel1 = channel.getChannel()
console.log(channel1)

const repository = channel.getRepository()
console.log(repository)

const sum = channel.sum(2, 3)
console.log(sum)
