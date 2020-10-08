import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../../../UI/SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
  return(
    <header className={`${classes.Toolbar}`}>
      <Logo />
      <nav className={classes.DisktopOnly}>
        <NavItems />
      </nav>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
  )
}
export default toolbar
