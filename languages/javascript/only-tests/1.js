const is_tapton_use_sdk = {
  active: false,
}
const is_tapton_use_sdk_ios = {
  active: false,
}

const verify_android = is_tapton_use_sdk.active
const verify_ios = is_tapton_use_sdk_ios.active

console.log({
  Android: verify_android,
  Ios: verify_ios,
})

if (
  (typeof is_tapton_use_sdk === 'undefined' || !is_tapton_use_sdk.active) &&
  (typeof is_tapton_use_sdk_ios === 'undefined' ||
    !is_tapton_use_sdk_ios.active)
) {
  console.log({
    message: 'invalid_min_version',
  })
  return
}

console.log({
  message: 'passou',
})
