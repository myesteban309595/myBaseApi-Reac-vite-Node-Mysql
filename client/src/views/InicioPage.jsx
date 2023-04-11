import { Fragment } from 'react';

import Navbar from '../components/Navbar'
import Login from '../components/Login';
import { Grid } from '@mui/material';

const InicioPage = ()=> {

    return (
        <Fragment>
          <Grid container style={{width:"100%", height:"100%"}}>
            <Navbar/>
            <Login/>
          </Grid>
        </Fragment>
    )
}

export default InicioPage;