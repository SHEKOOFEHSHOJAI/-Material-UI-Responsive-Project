import { Container, makeStyles } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))
const Post = () => {
    const classes = useStyle()
    return (

        <>
            hello
        </>
    );
}

export default Post;