const NAME = 'COMMON';

export const FINISH_REHYDRATE = `${NAME}/FINISH_REHYDRATE`;

export const isStoreRehydrated = store => store[NAME].rehydrate.isRehydrated;

export const finishRehydrate = () => ({
  type: FINISH_REHYDRATE,
});
