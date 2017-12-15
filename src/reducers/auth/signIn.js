import Actions from 'actions';

const getDefaultState = () => ({ isLoading: false, error: null });

function signIn(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        isLoading: true,
        error: null,
      };
    case Actions.SIGN_IN_SUCCESS:
      return {
        isLoading: false,
        error: null,
      };
    case Actions.SIGN_IN_FAIL:
      return {
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default signIn;
