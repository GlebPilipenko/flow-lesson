import {RootStoreType} from 'store/index';

export const selectUsersCount = (store: RootStoreType): number => store.usersCount.count;

export const selectQuestions = (store: RootStoreType): {isSamurai :boolean} => store.usersCount.questions;
