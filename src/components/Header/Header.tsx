import React from 'react';
// import { AppBar, Box, Toolbar, InputBase, Typography } from '@material-ui/core';
// import { Search } from '@material-ui/icons';
import Toolbarcopm from '../Toolbar/Toolbar';
import Menubarcomp from "../Menubarcomp/Menubarcomp";
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  
        
function Header() {

    return (
        <>
        <Menubarcomp/>
        <Toolbarcopm/>
        </>
    );
}

export default Header;