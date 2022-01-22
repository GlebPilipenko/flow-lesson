import {UserType} from 'types';
import React, {FC, memo} from 'react';
import {User} from 'components/User';

type PropsType = {
  users: UserType[];
};

export const UsersList: FC<PropsType> = memo(({users}) => {
  return (
    <>
      {users.map(({id, name}) => <User key={id} id={id} name={name} />)}
    </>
  );
});
