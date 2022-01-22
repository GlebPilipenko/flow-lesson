import {UserType} from 'types';

export const plusUserCount = () => ({
  type: 'PLUS_USER_COUNT',
}) as const;

export const createUser = (user: UserType) => ({
  type: 'CREATE_USER',
  payload: user
}) as const;
