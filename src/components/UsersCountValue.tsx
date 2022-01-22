import React, {FC, memo} from 'react';

type PropsType = {
  usersCount: number;
};

export const UsersCountValue: FC<PropsType> = memo(({usersCount}) => {
  return <span>Users count: {usersCount}</span>;
});
