import React, { Fragment, useState } from 'react'
import { grey } from '@mui/material/colors';

import {
    AppBar,
    Grid,
    Typography,
    Tab,
    Tabs,
    Box,
    Button,
    Tooltip
} from '@mui/material'

import HomeIcon from '@mui/icons-material/Home';

const componentFlex = {
   display : "flex",
   alignItems : "center",
   justifyContent: "center",
   width: "100%",
//    backgroundColor: "red"
}

const Navbar = (props)=> {
    
    const [value, setValue] = useState();
    
    let direccion = window.location
    let ruta = (direccion.pathname).toString().replace(/\/+/g, '').replace(/\s+/g, '');
    
    return(
        <Fragment>
            <AppBar style={{color:"white", backgroundColor:"#273c75", padding: 10, boxShadow:"none"}}>
                <Grid container style={{alignItems:"Center"}}>

                    <Grid item xs={3} style={componentFlex}>
                        <Typography style={{fontSize:"20px"}}>
                            <strong>CompanyName</strong>
                        </Typography>
                        <Typography >
                          <img src="" class="rounded" alt=""/>
                        </Typography>
                    </Grid>

                    <Grid item xs={6} style={componentFlex}>
                     <Tabs
                       value={value}
                       onChange={(e,val) => { setValue(val)}}   //*creo un estado para cambiar el indicador al seleccionar
                       textColor="inherit"
                       indicatorColor="secondary"
                       aria-label="secondary tabs example"
                       >
                       <Tab href='/inicio' label="INICIO" />
                       <Tab href='/header' label="PRODUCTOS" />
                       <Tab href='/' label="QUIENES SOMOS" />
                       <Tab href='/' label="CONTACTANOS" />
                     </Tabs>
                    </Grid>

                    {/* <Grid item xs={1}/> */}
                    
                    <Grid item xs={3} style={{display: 'flex', alignItems:"center", justifyContent:"center"}}>
                        <Box display= 'flex' alignItems="center" justifyContent="center" >
                            {/* <Button sx={{marginLeft:'auto'}} variant='contained'>LOGIN</Button>
                            <Button sx={{marginLeft:1}} style={{marginRight:10}} variant='contained'>REGISTRARSE</Button> */}
                            <Typography
                             style={{
                                fontSize: 35,
                                color:"#ffecb3"
                             }}
                            > 
                            Bienvenido
                            </Typography>
                        </Box>
                        <Grid style={{marginLeft:25}}>
                          { ruta !== '' ?
                           <Box>
                             <Tooltip title="Inicio" arrow followCursor= {false} leaveDelay={200} >                                 
                              <Button 
                                 href="/" 
                                 size='medium' 
                                 variant="outlined" 
                                 startIcon={ <HomeIcon sx={{ fontSize: 40, color: grey[600] }} />}
                                 style={{
                                    color:"#ffecb8",
                                    marginTop:0,
                                    fontWeight: 'bold'
                                 }}
                                >
                                 HOME
                              </Button>
                             </Tooltip>
                           </Box>
                         :
                         <Box></Box>
                        }
                         </Grid>
                    </Grid>

                </Grid>
            </AppBar>
        </Fragment>
    )
}

export default Navbar