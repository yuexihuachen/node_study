//export const increaseAction = { type: 'increase' };

export function onIncreaseClick(text) {
  return {
    type: 'increase',
    text
  };
}