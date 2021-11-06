import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import {createTheme,ThemeProvider } from '@material-ui/core'
import axios from 'axios'
import { Link } from "react-router-dom";
import "./getClientes.css"

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

export default function GetClientes() {

  

  const [cliente, setCliente] = useState([]);

  useEffect( () =>  {
    axios.get('http://localhost:3003/sistema/cliente/')
      .then(res => {
        setCliente(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id Cliente </TableCell>
            <TableCell align="right">Nome Cliente</TableCell>
            <TableCell align="right">Id Usina</TableCell>
            <TableCell align="right">Percentual de Participação</TableCell>
            <TableCell align="right">Ferramentas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cliente.map((clientes) => (
            <TableRow
              key={clientes.numeroCliente}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {clientes.numeroCliente}
              </TableCell>
              <TableCell align="right">{clientes.nomeCliente}</TableCell>
              <TableCell align="right">{clientes.usinaId}</TableCell>
              <TableCell align="right">{clientes.percentualDeParticipacao}</TableCell>
              <TableCell align="right">
                <Link to={`/delete/${clientes.numeroCliente}`}>  <Button color='secondary' variant= 'contained'>Deletar</Button> </Link>
                <Link to={`/atualiza/${clientes.numeroCliente}`}>  <Button color='secondary' variant= 'contained'>Atualizar</Button> </Link>
              </TableCell>
            </TableRow>

          ))}
            
          
        </TableBody>
        
      </Table>
    </TableContainer>
    <div id='button'>
      <Link to={`/cliente`}> <Button color='secondary' variant='contained' href='/cliente'>Criar Cliente</Button> </Link>
    </div>
  </ThemeProvider>
    
  )
}