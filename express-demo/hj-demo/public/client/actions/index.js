const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
//Action 只是描述了有事情发生了这一事实
export const increase = text => ({
  type: INCREASE,
  text
})

export const decrease = text => ({
  type: DECREASE,
  text
})


