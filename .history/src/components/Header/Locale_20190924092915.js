import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import '../../../src/animista.css'
import ToggleButton from '@material-ui/lab/ToggleButton';


export default class HeaderText extends React.PureComponent {
  render() {
    return (
        <div >
          exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        </div>
    );
  }
}



