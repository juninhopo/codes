let num = 25

const fibonacci = (num) => {
  if (num <= 1) return 1

  console.log(num)

  return fibonacci(num - 1) + fibonacci(num - 2)
}