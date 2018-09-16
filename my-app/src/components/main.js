import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomizedTabs from './tabs.js'; 
import PaperSheet from './papers.js';
import PermanentDrawer from './drawer.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  // console.log(props)

  console.log(props.item)

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={2}>
            <div>
                <PermanentDrawer item = {props.item}/>
            </div>
        </Grid>
        <Grid item xs={10}>
            <CustomizedTabs item = {props.item}/>
            <PaperSheet item = {props.item}/>
        </Grid>
      </Grid>
    </div>
  );
}


export default withStyles(styles)(CenteredGrid);