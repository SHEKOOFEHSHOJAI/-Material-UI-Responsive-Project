import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
// icons
import ListIcon from '@material-ui/icons/List';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PersonIcon from '@material-ui/icons/Person';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SettingsIcon from '@material-ui/icons/Settings';
import TabletMacIcon from '@material-ui/icons/TabletMac';

import StorefrontIcon from '@material-ui/icons/Storefront';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import HomeIcon from '@material-ui/icons/Home';
import ExitToApp from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles(theme => ({
    container: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('sm')]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7"

        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px"
        }
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer"

        },
    },
    text: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
            fontWeight: 500

        },
    },
}))
function LeftBar() {
    const classes = useStyles()
    return (
        <Container className={classes.container}>

            <div className={classes.item}>
                <HomeIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>


            <div className={classes.item}>
                <PersonIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>
            <div className={classes.item}>
                <ListIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>


            <div className={classes.item}>
                <PhotoCameraIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>

            <div className={classes.item}>
                <PlayCircleOutlineIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>

            <div className={classes.item}>
                <TabletMacIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>

            <div className={classes.item}>
                <BookmarkIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>


            <div className={classes.item}>
                <StorefrontIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>

            <div className={classes.item}>
                <SettingsIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>

            <div className={classes.item}>
                <ExitToApp className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>
        </Container>
    )

}

export default LeftBar;