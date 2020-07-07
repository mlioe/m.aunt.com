import {
  ADD,
  MINUS,
  LOGINTYPE
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

export const loginType = (type) => {
  return {
    type: LOGINTYPE,
    data:type
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}



