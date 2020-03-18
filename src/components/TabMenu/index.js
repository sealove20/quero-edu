import React, { useState } from 'react';

import './styles.scss'

import TabBarItem from '../TabMenuItem';

export default function TabMenu() {
  function handleClick(value) {
    setChosen(value)
  }
  const [chosen, setChosen] = useState('all');
  return (
    <div className='tab-menu-wrapper' data-test='tab-menu-component'>
      <TabBarItem 
        text={'Todos os semestre'}
        onClick={() => handleClick('all')}
        value={'all'}
        active={chosen}
      />
      <TabBarItem 
        text={'2° semestre de 2019'} 
        onClick={() => handleClick('2019.2')} 
        value={'2019.2'}
        active={chosen}
      />
      <TabBarItem 
        text={'1° semestre de 2020'}
        onClick={() => handleClick('2020.1')} 
        value={'2020.1'}
        active={chosen}
      />
    </div>
  );
}