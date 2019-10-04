import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Photo from '../headshot.jpg';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor : '#263238',
  },
  cardGrid: {
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(6),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardProfileMedia: {
    paddingTop: '70.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  media: {
    height: 170,
    width: 170,
  },
}));

export default function PaperSheet() {
  const classes = useStyles();
  return (
      <Paper className={classes.root}>
      <Typography>
        Resume
      </Typography>
      </Paper>
  );
}
