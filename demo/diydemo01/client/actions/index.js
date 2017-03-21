import  * as types from '../constants/index'

export function toAdd(text) {
  return {
    type: types.TO_ADD,
    text
  };
}

export function toDec(text) {
  return {
    type: types.TO_DEC,
    text
  };
}