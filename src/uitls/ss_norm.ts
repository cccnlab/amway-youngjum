// Age group 1 for age range 50 - 65 and group 2 for age > 65
const MU1 = 57616.27906976744
const SD1 = 15862.90730021276
const MU2 = 54475.935828877
const SD2 = 18086.93233941089

function SS_D_PRIME (score: number, age: number) {

  const mu = age > 65 ? MU2 : MU1
  const sd = age > 65 ? SD2 : SD1
  return (score - mu) / sd
}