const option1 = {
  active: false,
}
const option2 = {
  active: false,
}

const verify_1 = option1.active
const verify_2 = option2.active

console.log({
  Android: verify_1,
  Ios: verify_2,
})

if (
  (typeof option1 === 'undefined' || !option1.active) &&
  (typeof option2 === 'undefined' || !option2.active)
) {
  console.log({
    message: 'invalid_min_version',
  })
  return
}

console.log({
  message: 'passou',
})
