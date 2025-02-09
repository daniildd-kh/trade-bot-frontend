import React from 'react';
import BurgerMenu from './components/BurgerMenu';
import Icon from '../../components/Icon/Icon';
import refreshIcon from "../../assets/refresh.png"

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center px-[16px] pt-[25px]'>
      <BurgerMenu/>
      <h1 className='text-gray text-[18px] font-bold leading-[1.5]'>Dashboard</h1>
      <Icon src={refreshIcon} label="refresh"/>
    </header>
  );
};

export default Header;
