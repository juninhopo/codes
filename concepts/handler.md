# O que é um Handler?

É um manipulador de "eventos" que decide para onde o código precisa continuar.

### Exemplo:

```js
const eatFruit = async () => {
  switch (body.fruit) {
    case banana:
      await eatBanana(body)
      break
    case litter:
      await eatLitter(body)
      break
    default:
      throw new BadRequestError('Fruit not supported')
  }
}
```

```js
// Exemplo usando JavaScript (Node.js) e AWS Lambda com SQS Trigger
exports.handler = async (event) => {
  // Processa a mensagem da fila SQS
  event.Records.forEach((record) => {
    const messageBody = JSON.parse(record.body)
    console.log(`Mensagem recebida: ${messageBody}`)
  })

  // Lógica de processamento adicional

  return {
    statusCode: 200,
    body: JSON.stringify('Processamento concluído.'),
  }
}
```
