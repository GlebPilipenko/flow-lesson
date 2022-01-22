import React, {FC, memo} from 'react';
import {UserType} from 'types';

export const User: FC<UserType> = memo(({id, name}) => {
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
    </div>
  );
});
