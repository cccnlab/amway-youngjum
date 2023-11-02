// Age group 1 for age range 50 - 65 and group 2 for age > 65
const MU1 = 135707.5987535954
const SD1 = 31501.567426552814
const MU2 = 126337.98702830188
const SD2 = 32775.71879494309

function GNG_D_PRIME (score: number, age: number) {

  const mu = age > 65 ? MU2 : MU1
  const sd = age > 65 ? SD2 : SD1
  return (score - mu) / sd
}

export { GNG_D_PRIME }