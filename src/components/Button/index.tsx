// libs
import React from 'react';
import classNames from 'classnames';

// styles
import style from './Button.module.scss';

interface TButtonProps {
  color: 'yellow' | 'green';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Index: React.FC<TButtonProps> = ({
  children,
  onClick,
  color = 'green',
  size = 'medium',
  fullWidth,
  className,
}): React.ReactElement => (
  <button
    className={classNames(
      style.root,
      fullWidth && style.fullWidth,
      color === 'green' && style.colorGreen,
      color === 'yellow' && style.colorYellow,
      size === 'small' && style.sizeSmall,
      size === 'medium' && style.sizeMedium,
      className,
    )}
    type="button"
    onClick={onClick}>
    {children}
  </button>
);

export default Index;
