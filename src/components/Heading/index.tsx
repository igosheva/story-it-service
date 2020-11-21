// libs
import React from 'react';
import classNames from 'classnames';

// styles
import style from './Heading.module.scss';

type TComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span' | 'p';

interface THeadingProps {
  component?: TComponent;
  textWeight?: 'normal' | 'bold';
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FC<THeadingProps> = ({
  component = 'p',
  textWeight = 'normal',
  className,
  children,
}): React.ReactElement => {
  const Component = component || 'p';

  return (
    <Component
      className={classNames(
        style.root,
        component === 'h1' && style.variantH1,
        component === 'h2' && style.variantH2,
        component === 'h3' && style.variantH3,
        component === 'h4' && style.variantH4,
        component === 'p' && style.variantP,
        textWeight === 'normal' && style.weightNormal,
        textWeight === 'bold' && style.weightBold,
        className,
      )}>
      {children}
    </Component>
  );
};

export default Heading;
