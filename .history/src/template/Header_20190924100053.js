import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Logo from './template/HEad'

export default class HeaderText extends React.PureComponent {
  render() {
    return (
        <div >
           <Logo/>
           <HeaderText/>
            <Locale/>
        </div>
    );
  }
}



<