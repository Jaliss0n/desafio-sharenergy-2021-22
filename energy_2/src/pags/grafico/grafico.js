import React from 'react'
import {Paper,Typography,Box} from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import axios from 'axios'
import { useState, useEffect } from 'react';

//parte grafica, usando chart.js

function Grafico () {
 
  const [grafico, setGrafico] = useState([]);

  useEffect( () =>  {
    axios.get('https://raw.githubusercontent.com/SHARENERGY-OFICIAL/desafio-sharenergy-2021-22/main/dadosUsina.json')
      .then(res => {
        console.log(res.data)
        setGrafico(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  const data = {

    labels:grafico.map(grafico => (
      grafico.tempo_h.toFixed(1)
    )),
    datasets: [
      {
        label: 'Tensão',
        data: grafico.map(grafico => (
          grafico.tensao_V
        )),
        fill: false,
        backgroundColor: 'rgb(255, 99, 200)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Corrente',
        data: grafico.map(grafico => (
          grafico.corrente_A
        )),
        fill: false,
        backgroundColor: 'rgb(251, 0, 0)',
        borderColor: 'rgb(251, 0, 0)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Potencia',
        data: grafico.map(grafico => (
          grafico.potencia_kW
        )),
        fill: false,
        backgroundColor: 'rgb(116, 254, 0)',
        borderColor: 'rgb(116, 254, 0)',
        yAxisID: 'y-axis-2',
      },
      {
        label: 'Temperatura',
        data: grafico.map(grafico => (
          grafico.temperatura_C
        )),
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
      
    ],
};
  
  const options = {
    scales: {
      xAxes: [{
        title: "time",
        type: 'time',
        gridLines: {
            lineWidth: 2
        },
        time: {
            unit: "day",
            unitStepSize: 1000,
            displayFormats: {
                millisecond: 'MMM DD',
                second: 'MMM DD',
                minute: 'MMM DD',
                hour: 'MMM DD',
                day: 'MMM DD',
                week: 'MMM DD',
                month: 'MMM DD',
                quarter: 'MMM DD',
                year: 'MMM DD',
            }
        }
    }],
    },
};
    return (
        <div id='body'>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 0,
                        p: 3,
                        width: '1000px',
                        height: '75vh'
                    },
                }}
            >
                <Paper elevation={3}>
                    <Typography variant='h5' textAlign='center'>Dados da Usina em Função do tempo</Typography>
                    
                    <Line data={data} options={options} />
                    
                    <Typography variant='h6' textAlign='center'>A cima, tempo em horas</Typography>

                </Paper>
            </Box>        
        </div>
    )
}

export default Grafico;