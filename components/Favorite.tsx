import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    width: 200,
    maxWidth: 345,
    margin:"1em"
  },
  button:{
      textAlign:"center"
  }
});

export default function Favorite({fav}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="secondary">
            {fav}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" className={classes.button}>
          See
        </Button>
      </CardActions>
    </Card>
  );
}