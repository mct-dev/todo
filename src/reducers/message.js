import { TYPES } from './todo'
const MESSAGE_SHOW = 'MESSAGE_SHOW'

export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg})

export default (state='', action) => {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload
    // all 3  below cases will match the 3rd return
    case TYPES.ADD_TODO:
    case TYPES.REMOVE_TODO:
    case TYPES.LOAD_TODOS:
    case TYPES.REPLACE_TODO:
      return ''
    default:
      return state
  }
}
