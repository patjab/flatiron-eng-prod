export const setUsername = (username) => {
  return {
    type: "SET_USERNAME",
    payload: username
  }
}

export const changeErrorMessage = (message) => {
  return {
    type: "CHANGE_ERROR_MESSAGE",
    payload: message
  }
}
