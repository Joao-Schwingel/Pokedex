import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { typeHandle } from '../../utils';


export default function DenseTable({pokemonData}) {
    const {height, weight, types} = pokemonData
  return (
    <TableContainer component={Paper} sx={{height: 'fit-content', maxWidth: '300px', boxShadow: 'none'}}>
      <Table size="small" aria-label="a dense table" >
        <TableBody>
        <TableRow sx={{ "&:last-child td, &:last-child th": {border: 0}}}>
            <TableCell>
                {"Altura"} 
            </TableCell>
            <TableCell>
                {height + "(cm)"} 
            </TableCell>
        </TableRow>  
        <TableRow sx={{ "&:last-child td, &:last-child th": {border: 0}}}>
            <TableCell>
                {"Peso"} 
            </TableCell>
            <TableCell>
                {weight + "(g)"} 
            </TableCell>
        </TableRow> 
            <TableRow sx={{ "&:last-child td, &:last-child th": {border: 0}}}>
            <TableCell>
                {"Tipo"} 
            </TableCell>
            <TableCell>
                {typeHandle(types)} 
            </TableCell>
        </TableRow>   
        <TableRow/> 
        </TableBody>
      </Table>
    </TableContainer>
  );
}
