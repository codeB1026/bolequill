// ReusableButton.tsx
import { FC, MouseEvent } from 'react';

interface ReusableButtonProps {
      btntitle: string;
      style?: string;
      onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

}

export const ReusableButton: FC<ReusableButtonProps> = ({
      style = '',
      btntitle = '',
      onClick,
     
}) => (
      <button onClick={onClick} className={`${style}`} >
            {btntitle}
      </button>
);
