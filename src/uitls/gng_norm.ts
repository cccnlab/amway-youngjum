// Age group 1 for age range 50 - 65 and group 2 for age > 65
const MU1 = 135707.5987535954
const SD1 = 31501.567426552814
const MU2 = 126337.98702830188
const SD2 = 32775.71879494309

const VAL1_201_PROB = [0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.00479386,
  0.00862895, 0.01246405, 0.01629914, 0.02013423, 0.02205177,
  0.02492809, 0.02780441, 0.03068073, 0.0316395 , 0.03451582,
  0.03739214, 0.042186  , 0.04697987, 0.04985618, 0.05560882,
  0.06040268, 0.06232023, 0.06807287, 0.06999041, 0.07286673,
  0.07670182, 0.08053691, 0.08628955, 0.09012464, 0.0949185 ,
  0.10067114, 0.1093001 , 0.11217641, 0.11601151, 0.11888782,
  0.12751678, 0.13422819, 0.14381592, 0.14765101, 0.1620326 ,
  0.1725791 , 0.17833174, 0.18504314, 0.19558965, 0.20134228,
  0.21284756, 0.22051774, 0.22914669, 0.24065197, 0.24928092,
  0.26270374, 0.28092042, 0.29530201, 0.30680729, 0.31831256,
  0.33844679, 0.35953979, 0.37488015, 0.39117929, 0.40172579,
  0.41802493, 0.44199425, 0.46212848, 0.48034516, 0.49952061,
  0.5177373 , 0.54458293, 0.56375839, 0.59060403, 0.61169703,
  0.63087248, 0.65100671, 0.66922339, 0.6864813 , 0.7114094 ,
  0.72866731, 0.75263663, 0.76989453, 0.79769895, 0.8168744 ,
  0.83029722, 0.85234899, 0.87152445, 0.88686481, 0.9012464 ,
  0.91658677, 0.93000959, 0.93959732, 0.95110259, 0.95589645,
  0.95973154, 0.96548418, 0.97507191, 0.978907  , 0.98274209,
  0.98657718, 0.9894535 , 0.99232982, 0.99328859, 0.99424736,
  0.99424736, 0.99520614, 0.99616491, 0.99712368, 0.99808245,
  0.99808245, 0.99808245, 0.99808245, 0.99808245, 0.99808245,
  0.99808245, 0.99808245, 0.99808245, 0.99808245, 0.99808245,
  0.99808245, 0.99808245, 0.99808245, 0.99904123, 0.99904123,
  0.99904123, 0.99904123, 0.99904123, 0.99904123, 0.99904123,
  0.99904123, 0.99904123, 0.99904123, 0.99904123, 0.99904123,
  0.99904123, 0.99904123, 0.99904123, 0.99904123, 0.99904123,
  0.99904123, 0.99904123, 0.99904123, 0.99904123, 0.99904123,
  0.99904123, 0.99904123, 0.99904123, 0.99904123, 0.99904123,
  0.99904123, 0.99904123, 0.99904123, 1.        , 1.        ,
  1.        , 1.        , 1.        , 1.        , 1.        ,
  1.        , 1.        , 1.        , 1.        , 1.        ,
  1.        , 1.        , 1.        , 1.        , 1.        ,
  1.        , 1.        , 1.        , 1.        , 1.        ,
  1.        ]

const VAL2_201_PROB = [0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.        ,
  0.        , 0.        , 0.        , 0.        , 0.        ,
  0.00235849, 0.00471698, 0.01179245, 0.01886792, 0.02830189,
  0.04245283, 0.04245283, 0.04481132, 0.05188679, 0.05896226,
  0.06839623, 0.0754717 , 0.0754717 , 0.0754717 , 0.08018868,
  0.08490566, 0.09669811, 0.09669811, 0.10849057, 0.12028302,
  0.12028302, 0.125     , 0.12735849, 0.13207547, 0.14622642,
  0.1509434 , 0.16509434, 0.16981132, 0.18160377, 0.18867925,
  0.19811321, 0.20283019, 0.21462264, 0.21462264, 0.2240566 ,
  0.23113208, 0.23113208, 0.25      , 0.25707547, 0.27358491,
  0.28537736, 0.2995283 , 0.31132075, 0.33254717, 0.34198113,
  0.35377358, 0.36792453, 0.38207547, 0.40566038, 0.42924528,
  0.45283019, 0.4740566 , 0.49292453, 0.51179245, 0.53537736,
  0.55424528, 0.57783019, 0.5990566 , 0.62264151, 0.6509434 ,
  0.6745283 , 0.70518868, 0.74056604, 0.75235849, 0.76886792,
  0.78773585, 0.80424528, 0.81132075, 0.83726415, 0.85377358,
  0.87264151, 0.88679245, 0.90566038, 0.91037736, 0.91981132,
  0.92924528, 0.93867925, 0.94575472, 0.95518868, 0.95754717,
  0.95754717, 0.96226415, 0.96698113, 0.97169811, 0.97169811,
  0.9740566 , 0.98113208, 0.98584906, 0.98584906, 0.98820755,
  0.98820755, 0.99056604, 0.99056604, 0.99056604, 0.99056604,
  0.99292453, 0.99292453, 0.99292453, 0.99292453, 0.99292453,
  0.99292453, 0.99292453, 0.99292453, 0.99292453, 0.99292453,
  0.99292453, 0.99292453, 0.99292453, 0.99292453, 0.99292453,
  0.99292453, 0.99292453, 0.99292453, 0.99292453, 0.99292453,
  0.99292453, 0.99292453, 0.99292453, 0.99292453, 0.99292453,
  0.99292453, 0.99292453, 0.99292453, 0.99292453, 0.99292453,
  0.99292453, 0.99292453, 0.99528302, 0.99528302, 0.99528302,
  0.99528302, 0.99528302, 0.99528302, 0.99528302, 0.99528302,
  0.99528302, 0.99528302, 0.99528302, 0.99528302, 0.99528302,
  0.99528302, 0.99528302, 0.99528302, 0.99528302, 0.99528302,
  0.99528302, 0.99528302, 0.99528302, 0.99528302, 0.99528302,
  0.99528302, 0.99764151, 0.99764151, 0.99764151, 0.99764151,
  0.99764151, 1.        , 1.        , 1.        , 1.        ,
  1.        , 1.        , 1.        , 1.        , 1.        ,
  1.        ]

function ageGroup1Prob (score: number) {
  const probIndex = Math.min(Math.floor(score / 1500),200)
  return Math.round(VAL1_201_PROB[probIndex])
}

function ageGroup2Prob (score: number) {
  const probIndex = Math.min(Math.floor(score / 1500),200)
  return Math.round(VAL2_201_PROB[probIndex])
}

function GNG_Percentile (score: number, age: number) {
  return (age > 65) ? ageGroup2Prob(score) : ageGroup1Prob(score)
}

function GNG_D_PRIME (score: number, age: number) {

  const mu = age > 65 ? MU2 : MU1
  const sd = age > 65 ? SD2 : SD1
  return (score - mu) / sd
}

export { GNG_D_PRIME, GNG_Percentile }