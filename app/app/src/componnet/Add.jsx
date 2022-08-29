import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, RadioGroup, Snackbar, TextField, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import Radio from '@material-ui/core/Radio';
import MuiAlert from '@material-ui/lab/Alert';
import Post from './Post'
const useStyle = makeStyles((theme) => ({
    Fab: {
        position: "fixed",
        bottom: 10,
        right: 20,
    },
    container: {
        width: 300,
        height: 450,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "100vw",
            height: "100vh"
        },
        Form: {
            padding: theme.spacing(2)
        },
        item: {
            marginBottom: theme.spacing(3)
        }
    }
}))


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
    const classes = useStyle()
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    return (

        < >
            <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
                <Fab color="secondary" className={classes.Fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>

            <Modal open={open}>

                <Container className={classes.container}>
                    <form className={classes.Form} autoComplete="off">

                        <div className={classes.item}>

                            <TextField id="standard-basic" label="title" size="small" style={{ width: "100%" }} />
                        </div>


                        <div className={classes.item}>

                            <TextField id="outlined-multiline-static" label="Multiline" multiline rows={4} defaultValue="Tell your story..." variant="outlined" style={{ width: "100%" }} />

                        </div>

                        <div className={classes.item}>

                            <TextField select label="Public">

                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="unListed">unListed</MenuItem>

                            </TextField>

                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend">Whe can Comment?</FormLabel>
                            <RadioGroup >
                                <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody" />
                                <FormControlLabel value="My Friends" control={<Radio size="small" />} label="My Friends" />
                                <FormControlLabel value="Nobody" control={<Radio size="small" />} label="Nobody" />
                                <FormControlLabel value="Custom" disabled control={<Radio size="small" />} label="Custom(Premium)" />


                            </RadioGroup>
                        </div>

                        <div className={classes.item}>

                            <Button variant="outlined" color="primary" style={{ marginRight: 20 }} onClick={() => setOpenAlert(true)}>Create</Button>
                            <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                        </div>

                    </form>
                </Container>
            </Modal >


            {/* snack */}

            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    );
}
export default Add;