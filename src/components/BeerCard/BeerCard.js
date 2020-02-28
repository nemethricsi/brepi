import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 200,
    width: 180,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    margin: '16px 0',
    backgroundSize: 'contain',
  },
});

export default function BeerCard(props) {
  const classes = useStyles();
  const [ cover, setCover ] = useState(true);
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => setCover(!cover)}>
        {cover ? (
          <>
            <CardMedia
            className={classes.media}
            image={props.image}
            title="Beer"
            />
            <CardContent>
              <Typography gutterBottom component="h2">
                {props.name}
              </Typography>
            </CardContent>
          </>
        ) : (
          <>
            <CardContent style={{height:140, overflow: 'auto'}}>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='contained' color='secondary'>Buy</Button>
            </CardActions>
          </>
        )}
      </CardActionArea>
    </Card>
  );
}
