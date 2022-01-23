import {RootStoreType} from 'store/index';

export const selectUsersCount = (store: RootStoreType): number => store.usersCount.count;
