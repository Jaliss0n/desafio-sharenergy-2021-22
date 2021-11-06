import { Button, Typography,createTheme,ThemeProvider } from '@material-ui/core'
import './menu.css'
import React from 'react'
import Routes from '../../../routes'

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

function Menu() {

    return(
        <div id='pagina'>

            <div id= 'menu_lateral'>
                <ThemeProvider theme={theme}>
                    <div class='btn_menu'>
                        <img  src='./icone_energia.webp'/>
                        <Button variant='contained' fullWidth href='/getClientes'>Gerenciador de Clientes</Button>
                        <Button variant= 'contained' fullWidth >Finanças</Button>
                        <Button variant= 'contained' fullWidth href='/'>Dados</Button>
                    </div>

                    <div class='rodape'>
                        <Typography color='primary'>
                            Desenv. por <a href= 'https://github.com/Jaliss0n'>Jalisson Santos</a> 
                        </Typography>
                    </div>
                </ThemeProvider>
            </div>
            
            <div id='conteudo'>
                <Routes/>
            </div>
        </div>
    )
       
}

export default Menu;