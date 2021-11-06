import React from 'react';
import {Toolbar,ThemeProvider,createTheme,createMuiTheme,makeStyles,CssBaseline,Drawer,Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import './header.css'

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary:{
            main: '#00a2a2'
        }
    }
   
})

function Header() {
    return(
        <div >
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <AppBar position="static" color='primary'>
                    <Toolbar>
                        <img href='/' src='./logo.png' width='250px' height='70px'/>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            
        </div>
    )
}

export default Header;