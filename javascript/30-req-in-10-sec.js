const axios = require('axios')

async function makeRequests() {
  const totalRequests = 30
  const requestsPerSecond = 5 // 3 requisições por segundo
  const interval = 1000 / requestsPerSecond

  const requests = []

  // Crie um array com as requisições que você deseja fazer
  for (let i = 1; i <= totalRequests; i++) {
    const request = axios.get('api.orgchurch.com/')
    requests.push(request)
  }

  const start = Date.now()

  // Use o axios.all() para executar as requisições em paralelo
  await axios.all(requests)

  const end = Date.now()
  const elapsed = end - start
  console.log(`Tempo total para concluir as requisições: ${elapsed}ms`)
}

makeRequests()
