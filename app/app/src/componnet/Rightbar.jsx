import React from 'react';

import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))
function RightBar() {

    const classes = useStyles()
    return (
        <Container className={classes.container}>
            reightbar
        </Container>
    )

}
export default RightBar;