import React from 'react';
import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core';
import Navbar  from './componnet/Navbar';

const useStyles=makeStyles(theme=>({
  // button:{
  //   // color:"white",
  //   // backgroundColor:theme.palette.success.dark
  //   ...theme.myButton
  // }
}))
function App() {
  const classes=useStyles()
  return(
    <div>
      <Navbar/>
      {/* <Button  className={classes.button } variant='outlined' >Material UI </Button> */}
      hello
    </div>
  )
  
}
export default App;
// https://www.youtube.com/watch?v=vyJU9efvUtQ