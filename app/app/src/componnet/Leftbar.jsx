import React from 'react';

import { Container, makeStyles, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles(theme => ({
    container: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main
    },
    item: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer"

        },
        text: {
            [theme.breakpoints.down('sm')]: {
                display: "none"

            },
        }
    }
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
                <HomeIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>

            <div className={classes.item}>
                <HomeIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>

            <div className={classes.item}>
                <HomeIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>

            <div className={classes.item}>
                <HomeIcon className={classes.icons} />
                <Typography className={classes.text}>Home page</Typography>
            </div>
        </Container>
    )

}

export default LeftBar;