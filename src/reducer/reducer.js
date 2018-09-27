const initialState = {
  username: '',
  errorMessage: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload
      }
    case "CHANGE_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default reducer
