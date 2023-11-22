// reducer.js
const initialState = {
    username: '',
    password: '',
    loading: false,
    errorCode: null,
    userInfo: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USERNAME':
        return { ...state, username: action.payload };
  
      case 'UPDATE_PASSWORD':
        return { ...state, password: action.payload };
  
      case 'START_LOADING':
        return { ...state, loading: true, errorCode: null, userInfo: null };
  
      case 'STOP_LOADING':
        return { ...state, loading: false };
  
      case 'LOGIN_SUCCESS':
        return { ...state, userInfo: action.payload, loading: false };
  
      case 'LOGIN_FAILURE':
        return { ...state, errorCode: action.payload, loading: false };
  
      default:
        return state;
    }
  };
  
  export default reducer;