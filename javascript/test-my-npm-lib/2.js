import restToJSONRPC from 'rest-to-jsonrpc-2.0'

const result = restToJSONRPC({
  path: '/test/ping',
  id: 'id123',
  params: {
    test: 'darlan',
  },
})

console.log(result)
