// libs
import React, { useState } from 'react';

// [components]
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Layout from '../../layouts/Layout';

// components
import PokemonCard from './components/PokemonCard';

// hooks
import useData from '../../hook/getData';

// types
import { TPokemonCard } from '../../types';

// styles
import style from './Pokedex.module.scss';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({ name: '' });

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  if (isLoading) {
    return <div>...isLoading</div>;
  }

  if (isError) {
    return <div>Something wrong!!!</div>;
  }

  return (
    <div className={style.root}>
      <Layout className={style.content}>
        <Heading component="h3" className={style.title}>
          {data?.total} <span className={style.titleWeightBold}>Pokemons</span> for you to choose your favorite
        </Heading>
        <div className={style.search}>
          <Input value={searchValue} onChange={handleSearchChange} placeholder="Encuentra tu pokémon..." />
        </div>
        {data?.pokemons.length !== 0 ? (
          <div className={style.list}>
            {data?.pokemons.map((item: TPokemonCard) => (
              <PokemonCard className={style.item} item={item} key={`pokemon-${item.id}`} />
            ))}
          </div>
        ) : null}
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
