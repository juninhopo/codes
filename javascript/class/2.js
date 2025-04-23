const bigDay = new Date(1998, 8, 7)

console.log(bigDay.toLocaleDateString())

if (bigDay.getTime() < Date.now()) {
  console.log('Once upon a time...')
}
