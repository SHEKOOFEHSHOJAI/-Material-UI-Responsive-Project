import React from 'react';
// import Button from '@material-ui/core/Button'
// import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core';
import Navbar from './componnet/Navbar';
import LeftBar from './componnet/Leftbar';
import RightBar from './componnet/Rightbar';
import Grid from '@material-ui/core/Grid';
import Feed from './componnet/Feed'
import Add from './componnet/Add';
const useStyles = makeStyles(theme => ({
  // button:{
  //   // color:"white",
  //   // backgroundColor:theme.palette.success.dark
  //   ...theme.myButton
  // }

  Right: {
    [theme.breakpoints.down('sm')]: {
      display: "none"
    }
  }
}))
function App() {
  const classes = useStyles()
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>

        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>

        <Grid item sm={3} className={classes.Right}>

          <RightBar />
        </Grid>
      </Grid>

      <Add />
    </div>
  )

}
export default App;
// https://www.youtube.com/watch?v=vyJU9efvUtQ