import React from 'react';
// import { AppBar, Box, Toolbar, InputBase, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';

function Header() {

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6">
                    <Search />
                    Search
                </Typography>
                <Box display={"flex"}>
                    <Typography>
                        Explore new places
                    </Typography>
                    <span className='///////aqui va el autocomplete de google////////'>
                        <div className={"classes.search"}>
                            <div className={"classes.searchIcon"}>
                                <Search />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: "classes.inputRoot",
                                    input: "classes.inputInput",
                                }}
                                inputProps={{ "aria-label": "search" }} />
                        </div>
                    </span>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;