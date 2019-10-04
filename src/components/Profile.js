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
      <Container className={classes.cardGrid} maxWidth="md" justifyContent="center">
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardProfileMedia}
                  image={Photo}
                  title="Justin Ward"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Justin Ward
                  </Typography>
                  <Typography component="h3">
                    Bachelor of Computer Science
                  </Typography>
                  <Typography component="p">
                    Carleton University
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    About Me
                  </Typography>
                  <Typography>
                    I am a passionate third year Bachelor of Computer Science student attending Carleton University with an eagerness to learn and develop neccesary skills to be succesful in industry.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
      </Container>
      </Paper>
  );
}
