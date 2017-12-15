import Actions from 'actions';

export const getDefaultState = () => ({ isRehydrated: false });

function rehydrate(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }

  switch (action.type) {
    case Actions.FINISH_REHYDRATE:
      return {
        isRehydrated: true,
      };
    default:
      return state;
  }
}

export default rehydrate;
