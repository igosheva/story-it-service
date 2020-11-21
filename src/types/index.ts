export type TPokemonTypeColor = 'poison' | 'grass' | 'fire' | 'flying' | 'water' | 'bug';
export type TPokemonTypeAbilities = 'overgrow' | 'chlorophyll';

export type TPokemonCard = {
  id: number;
  name: string;
  stats: {
    attack: number;
    defense: number;
    hp: number;
    speed: number;
  };
  img: string;
  types: TPokemonTypeColor[];
  abilities: TPokemonTypeAbilities;
  order: number;
};

export type TDataResponse = {
  total: number;
  pokemons: TPokemonCard[];
};
