const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

export const increase = text => ({
  type: INCREASE,
  text
})

export const decrease = text => ({
  type: DECREASE,
  text
})


