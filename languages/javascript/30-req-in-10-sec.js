const axios = require('axios')

async function makeRequests() {
  const totalRequests = 30
  const requestsPerSecond = 5
  const interval = 1000 / requestsPerSecond

  const requests = []

  for (let i = 1; i <= totalRequests; i++) {
    const request = axios.get('api.orgchurch.com/')
    requests.push(request)
  }

  const start = Date.now()

  await axios.all(requests)

  const end = Date.now()
  const elapsed = end - start
  console.log(`Tempo total para concluir as requisições: ${elapsed}ms`)
}

makeRequests()
