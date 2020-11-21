// libs
import React from 'react';
import { navigate } from 'hookrouter';

// types
import { LinkEnum } from '../../routes';

// components
import Button from '../../components/Button';

// styles
import style from './NotFound.module.scss';

const NotFound = () => {
  // @ts-ignore
  const handleClick = () => navigate(LinkEnum.HOME);
  return (
    <div className={style.root}>
      <Button color="yellow" onClick={handleClick}>
        Return
      </Button>
    </div>
  );
};

export default NotFound;
