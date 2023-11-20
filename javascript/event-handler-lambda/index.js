// Example using Javascript (Node.js) and AWS Lambda with SQS Trigger

exports.handler = async (event) => {
  // Process the SQS queue message
  event.Records.forEach((record) => {
    const messageBody = JSON.parse(record.body)
    console.log(`Mensagem recebida: ${messageBody}`)
  })

  // Additional processing logic

  return {
    statusCode: 200,
    body: JSON.stringify('Processamento concluido'),
  }
}
