import React, { useState } from 'react';

import './styles.scss'

import TabBarItem from '../TabMenuItem';

export default function TabMenu() {
  const [chosen, setChosen] = useState('all');
  return (
    <div className='tab-menu-wrapper' data-test='tab-menu-component'>
      <TabBarItem 
        text={'Todos os semestre'}
        onClick={() => setChosen('all')}
        value={'all'}
        active={chosen}

      />
      <TabBarItem 
        text={'2° semestre de 2019'} 
        onClick={() => setChosen('2019.2')} 
        value={'2019.2'}
        active={chosen}
      />
      <TabBarItem 
      text={'1° semestre de 2020'}
      onClick={(e) => setChosen('2020.1')} 
      value={'2020.1'}
      active={chosen}
      />
    </div>
  )
}