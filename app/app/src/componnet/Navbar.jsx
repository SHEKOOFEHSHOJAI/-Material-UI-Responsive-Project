import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
const useStyles = makeStyles(theme => ({
    logoLg:{
        display:"none",
        [theme.breakpoints.up('sm')]:{
            display:"black"
        },
    },
    logoSm:{

        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
    }
}))
function Navbar() {
    const classes = useStyles()
    return (
        <AppBar>

            <Toolbar>
                <Typography variant='h6' className={classes.logoLg}>Lama Dev</Typography>
                <Typography variant='h6' className={classes.logoSm}> LAMA</Typography>
            </Toolbar>
            <div className={classes.serch}>
                <SearchIcon />
                <InputBase />
            </div>
        </AppBar>
    )

}
export default Navbar;