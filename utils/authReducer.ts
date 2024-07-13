
interface LogInState {
    isAuthrized: boolean;
  }
  
  const initialState: LogInState = {
    isAuthrized: false,
  };
  
  type LogInAction =
    | ReturnType<typeof logIn>
    | ReturnType<typeof logOut>;
  
  export const logInReducer = (
    state: LogInState = initialState,
    action: LogInAction
  ): LogInState => {
    switch (action.type) {
      case 'logIn':
        return { ...state, isAuthrized: true };
      case 'logOut':
        return { ...state, isAuthrized: false };
      default:
        return state;
    }
  };
  
  