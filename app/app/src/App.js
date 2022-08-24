import React from 'react';
import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles(theme=>({
  button:{
    color:"white",
    backgroundColor:theme.palette.success.dark
    
  }
}))
function App() {
  const classes=useStyles()
  return(
    <div>
      <Button  className={classes.button } variant='outlined' >Material UI </Button>
      hello
    </div>
  )
  
}
export default App;
// https://www.youtube.com/watch?v=vyJU9efvUtQ