import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  paper: {
    height : "12rem",
    margin : "2rem",
    padding : "1rem"
  }
})
export default function BasicGrid() {
  const classes = useStyles();
  return (
    <Container display="flex" maxWidth="xl">
      <Grid container spacing = {2}>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>3</Paper>
        </Grid>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>4</Paper>
        </Grid>
      </Grid>
      <Grid container spacing = {2}>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>5</Paper>
        </Grid>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>6</Paper>
        </Grid>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>7</Paper>
        </Grid>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>8</Paper>
        </Grid>
      </Grid>
      <Grid container spacing = {2}>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>9</Paper>
        </Grid>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>10</Paper>
        </Grid>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>11</Paper>
        </Grid>
        <Grid item xs={12} xl={3} md={6}>
          <Paper className={classes.paper}>12</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
