// actions.js
export const updateUsername = (username) => ({
  type: 'UPDATE_USERNAME',
  payload: username,
});

export const updatePassword = (password) => ({
  type: 'UPDATE_PASSWORD',
  payload: password,
});

export const startLoading = () => ({
  type: 'START_LOADING',
});

export const stopLoading = () => ({
  type: 'STOP_LOADING',
});

export const loginSuccess = (userInfo) => ({
  type: 'LOGIN_SUCCESS',
  payload: userInfo,
});

export const loginFailure = (errorCode) => ({
  type: 'LOGIN_FAILURE',
  payload: errorCode,
});