// libs
import React from 'react';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Legendaries from './pages/Legendaries';
import Docks from './pages/Docks';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCKS = '/documentation',
}

interface TGeneralMenu {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

export const GENERAL_MENU: TGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <Legendaries />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCKS,
    component: () => <Docks />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: TGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
