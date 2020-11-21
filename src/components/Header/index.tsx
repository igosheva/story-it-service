// libs
import React from 'react';
import classNames from 'classnames';
import { A, usePath } from 'hookrouter';

// layouts
import Layout from '../../layouts/Layout';

// images
// @ts-ignore
import logo from './Logo.png';

// data
import { GENERAL_MENU } from '../../routes';

// styles
import style from './Header.module.scss';

const Header = (): React.ReactElement => {
  const path = usePath();
  return (
    <header className={classNames(style.root)}>
      <Layout className={style.container}>
        <img className={style.logo} src={logo} alt="logo" />
        <ul className={style.nav}>
          {GENERAL_MENU.map(({ title, link }) => (
            <li
              key={`nav-item-${title}`}
              className={classNames(style.navItem, { [style.navItemActive]: link === path })}>
              <A href={link}>{title}</A>
            </li>
          ))}
        </ul>
      </Layout>
    </header>
  );
};

export default React.memo(Header);
