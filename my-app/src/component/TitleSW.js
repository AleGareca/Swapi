import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import './TitleSW.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginLeft:'35%',
 
    
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
           src="http://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo-300x300.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Star Wars API
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Puedes buscar personajes de Star Wars y agregarlos a una lista
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
        <Link to="/Register" size="small" color="primary"> Buscar</Link>       


      </CardActions>
    </Card>
  );
}