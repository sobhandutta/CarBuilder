import React from 'react';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Navigationitems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggledClicked} />
        <div className={classes.Logo}><Logo /></div>
        <nav className={classes.DesktopOnly}>
            <Navigationitems />
        </nav>
    </header>
);

export default toolbar;