// libs
import React from 'react';
import { navigate } from 'hookrouter';

// [components]
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Layout from '../../layouts/Layout';
import Footer from '../../components/Footer';

// types
import { LinkEnum } from '../../routes';

// components
import Parallax from './components/Parallax';
// styles
import style from './Home.module.scss';

const Home = (): React.ReactElement => {
  // @ts-ignore
  const handleClick = () => navigate(LinkEnum.POKEDEX);

  return (
    <div className={style.root}>
      <Layout className={style.content}>
        <div className={style.mainContent}>
          <Heading className={style.title} component="h1">
            <span className={style.titleWeightBold}>Find</span> all your favorite{' '}
            <span className={style.titleWeightBold}>Pokemon️</span>
          </Heading>
          <Heading className={style.text} component="p">
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button color="green" onClick={handleClick}>
            See pokemons
          </Button>
        </div>
        <div className={style.banner}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
