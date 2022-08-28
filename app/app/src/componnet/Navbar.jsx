import React from 'react';

import { alpha, makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Search from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Cancel from '@material-ui/icons/Cancel';
import Notifications from '@material-ui/icons/Notifications';
import { useState } from 'react';
const useStyles = makeStyles(theme => ({

    Toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },

    logoLg: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block"
        },
    },
    logoSm: {

        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
    },
    Search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            display: (props) => props.open ? "flex" : "none"
        },
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1)
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: (props) => "none"
        },
    },
    icons: {

        alignItems: "center",

        display: (props) => props.open ? "none" : "flex"

    },
    badge: {
        marginRight: theme.spacing(2)
    }
}))
function Navbar() {
    const [open, setOpen] = useState(false)
    const classes = useStyles({ open })
    return (
        <AppBar>

            <Toolbar className={classes.Toolbar}>
                <Typography variant='h6' className={classes.logoLg}>Lama Dev</Typography>
                <Typography variant='h6' className={classes.logoSm}> LAMA</Typography>

                <div className={classes.Search}>
                    <Search />
                    <InputBase placeholder='search...' className='classes.input' />

                    <Cancel className={classes.Cancel} onClick={() => setOpen(false)} />
                </div>

                {/* icons */}

                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <MailIcon />
                    </Badge>

                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />

                </div>
            </Toolbar>
        </AppBar>
    )

}
export default Navbar;