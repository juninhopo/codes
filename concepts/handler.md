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
