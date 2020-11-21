// libs
import React from 'react';
import classNames from 'classnames';

// components
import Heading from '../../../../components/Heading';

// types
import { TPokemonCard, TPokemonTypeColor } from '../../../../types';

// styles
import style from './PokemonCard.module.scss';

type TPokemonCardProps = {
  item: TPokemonCard;
  className?: string;
};

const PokemonCard: React.FC<TPokemonCardProps> = ({ item, className }) => (
  <div className={classNames(style.root, className)}>
    <div className={style.infoWrap}>
      <Heading component="h4" className={style.titleName} textWeight="bold">
        {item.name}
      </Heading>
      <div className={style.statWrap}>
        <div className={style.statItem}>
          <div className={style.statValue}>{item.stats.attack}</div>
          Attack
        </div>
        <div className={style.statItem}>
          <div className={style.statValue}>{item.stats.defense}</div>
          Defense
        </div>
      </div>
      <div className={style.labelWrap}>
        {item.types.map((type: TPokemonTypeColor) => (
          <span key={`${item.id}-${type[0]}-${type[2]}`} className={classNames(style.label, style[type])}>
            {type}
          </span>
        ))}
      </div>
    </div>
    <div className={style.pictureWrap}>
      <img src={item.img} alt={item.name} />
    </div>
  </div>
);

export default PokemonCard;
