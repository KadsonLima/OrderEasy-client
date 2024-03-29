const initialState = {
    data: null,
  };
  
  export const setUserAction = (user) => ({
    type: 'SET_USER',
    payload: user,
  });


  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  