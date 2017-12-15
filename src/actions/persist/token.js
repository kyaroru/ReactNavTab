const NAME = 'PERSIST';

export const SET_TOKEN = `${NAME}/SET_TOKEN`;
export const CLEAR_TOKEN = `${NAME}/CLEAR_TOKEN`;

export const getToken = store => store[NAME].token;

export const setToken = token => ({
  type: SET_TOKEN,
  token,
});

export const clearToken = () => ({
  type: CLEAR_TOKEN,
});
