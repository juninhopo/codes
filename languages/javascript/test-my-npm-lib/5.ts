import { restToJSONRPC } from 'rest-to-jsonrpc-2.0'

const jsonrpc = restToJSONRPC({
  id: 'darlan',
  params: {
    test: 'oi',
    aiai: 'filipe',
  },
  path: '/filipe/teste',
})
console.log(jsonrpc)
