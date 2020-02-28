import React, { useEffect, useState } from 'react';
import BeerCard from '../../components/BeerCard/BeerCard';
import styles from './Beers.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  downloadBeers,
  selectBeers,
} from './beerSlice';
import Pagination from '@material-ui/lab/Pagination';

const Beers = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const loadBeers = useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?per_page=6&page=${page}`)
      .then(resp => resp.json())
      .then(result => {
        dispatch(downloadBeers(result))
      });
  }, [page]);

  const beers = useSelector(selectBeers);

  return (
    <>
      <h1>Beers</h1>
      <div className={styles.beerContainer}>
        {beers.beers.map((beer, i) => {
          return <BeerCard 
            name={beer.name} 
            image={beer.image_url} 
            key={beer.id} 
            desc={beer.description} />
        })}
      </div>
      <Pagination
        onChange={ (_, page) => setPage(page) } 
        shape='rounded' 
        count={20} 
        variant="outlined" 
        color="primary"
        showFirstButton
        showLastButton
        size='large'
       />
    </>
  );
}

export default Beers;
