import React from 'react';
import { useState, useEffect, useMemo } from 'react'
import { useTable } from 'react-table'
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  
  const planets = useMemo(() => [
    {
      name: 'Luna',
      rotation_period: '123',
      orbital_period: '3000'
    },
    {
      name: 'Vona',
      rotation_period: '1',
      orbital_period: '3'
    },
    {
      name: 'Mara',
      rotation_period: '12',
      orbital_period: '300'
    },
  ], [])

  const columns = useMemo(() => [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Rotation period',
        accessor: 'rotation_period'
      },
      {
        Header: 'Orbital period',
        accessor: 'orbital_period'
      }
  ], [])

  
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({columns, data: planets})

  const planetsData = useMemo(() => [...data], [data])
  const planetsColumns = useMemo(() => data[0], [data])

  console.log(data)

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then(response => {
        if(response.ok){
          return response.json()
        }
        throw response
      })
      .then(data => {
        setData(data.results)
      })
      .catch(error => {
        console.error('Error fetching data: ', error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
         <TableContainer component={Paper}>
           <Table {...getTableProps}>
              <TableHead >
                {headerGroups.map((headerGroup) => (
                  <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <TableCell style={{backgroundColor:'#473485', color: 'white'}}  {...column.getHeaderProps()}>
                          {column.render('Header')}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row)
                    return (
                      <TableRow {...row.getRowProps()}>
                        {row.cells.map((cell, index) => (
                            <TableCell {...cell.getCellProps()}>
                              {cell.render('Cell')}
                            </TableCell>
                        ))}
                      </TableRow>
                    )
                })}
              </TableBody>
           </Table>
         </TableContainer>
  ) 
}

export default App;
