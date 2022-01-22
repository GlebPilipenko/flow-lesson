import {RootStoreType} from 'store/index';
import {UserType} from 'types';

export const selectUsers = (store: RootStoreType): UserType[] => store.usersData.users;
