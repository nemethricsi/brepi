import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  downloadBeers,
  selectBeers,
} from '../beers/beerSlice';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function MyTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loadBeers = useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?per_page=12&page=1`)
      .then(resp => resp.json())
      .then(result => {
        dispatch(downloadBeers(result))
      });
  }, []);

  const beers = useSelector(selectBeers);
  console.log(beers.beers)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Beer name</TableCell>
            <TableCell>ABV</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beers.beers.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.abv}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
