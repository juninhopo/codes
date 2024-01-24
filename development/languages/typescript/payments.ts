interface PaymentService {
  pay(productId: string, amount: number)
}

class PixPaymentService {
  pay(productId: string, amount: number) {
    // pagar pix
    // se pagar, registrar compra como paga
  }
}

class BoletoPaymentService {
  pay(productId: string, amount: number) {
    // pagar boleto
    // se pagar, registrar compra como paga
  }
}

class PaymentController {
  constructor(private paymentService: PaymentService) {}

  execute(productId: string, amount: number) {
    this.paymentService.pay(productId, amount)
  }
}

const expressFunction = (req, res) => {
  const paymentService =
    req.query['type'] == 'pix'
      ? new PixPaymentService()
      : new BoletoPaymentService()
  const paymentController = new PaymentController(paymentService)
  paymentController.execute(
    req.body['productId'] as string,
    req.body['amount'] as number
  )
}
