// libs
import React from 'react';
import classNames from 'classnames';

// layouts
import Layout from '../../layouts/Layout';

// styles
import style from './Footer.module.scss';

const Index = (): React.ReactElement => (
  <footer className={classNames(style.root)}>
    <Layout className={style.container}>
      <p className={style.text}>
        Make with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </p>
      <a className={style.link} href="/">
        Ours Team
      </a>
    </Layout>
  </footer>
);

export default Index;
