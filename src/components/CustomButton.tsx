import React, {FC, memo} from 'react';

type PropsType = {
  title: string;
  isButtonDisabled: boolean;
  questions: { isSamurai: boolean };
  onClick: () => void;
};

export const CustomButton: FC<PropsType> = memo(({title, questions, isButtonDisabled, onClick}) => {
  return (
    <div>
      <button disabled={isButtonDisabled} onClick={onClick}>
        {title}
      </button>
    </div>
  );
});
