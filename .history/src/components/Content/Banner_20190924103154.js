import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default class Banner extends React.PureComponent {
  render() {
    return (
        <div style={{float:"left"}}>
         <Paper>
         <img src="https://via.placeholder.com/70"/>
         <Typography variant="h1" component="h2">
            American Express
        </Typography>
         </Paper>
        </div>
    );
  }
}



