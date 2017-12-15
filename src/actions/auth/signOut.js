export const NAME = 'AUTH';

export const SIGN_OUT = `${NAME}/SIGN_OUT`;

export const signOut = () => ({
  type: SIGN_OUT,
});
