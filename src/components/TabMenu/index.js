import React from 'react';

import './styles.scss'

import TabBarItem from '../TabMenuItem';

export default function TabMenu({ semester, setSemester }) {
  function handleTabMenuChange(value) {
    setSemester(value)
  }

  return (
    <div className='tab-menu-wrapper' data-test='tab-menu-component'>
      <TabBarItem 
        text={'Todos os semestre'}
        onClick={() => handleTabMenuChange('all')}
        value={'all'}
        active={semester}
      />
      <TabBarItem 
        text={'2° semestre de 2019'} 
        onClick={() => handleTabMenuChange('2019.2')} 
        value={'2019.2'}
        active={semester}
      />
      <TabBarItem 
        text={'1° semestre de 2020'}
        onClick={() => handleTabMenuChange('2020.1')} 
        value={'2020.1'}
        active={semester}
      />
    </div>
  );
}