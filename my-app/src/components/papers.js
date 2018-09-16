import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Modal from './modal.js';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    paperSheet: {
        marginTop: theme.spacing.unit * 8,
        marginLeft: theme.spacing.unit * 8,
        marginRight: theme.spacing.unit * 8,
        maxHeight: theme.spacing.unit * 35
    }
});

class PaperSheet extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Paper className={`${classes.root} ${classes.paperSheet}`} elevation={1}>
                    <Typography variant="headline" component="h3">
                        This is a sheet of paper.
                    </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                    </Typography>
                    <Modal />
                </Paper>
            </div>
        );
    };
}
  
PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(PaperSheet);