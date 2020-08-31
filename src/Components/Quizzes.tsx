import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardMedia,CardContent,CardActions,CardActionArea,Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
function Quizzes(){
    const classes = useStyles();
    return(
    
    <div>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
              <CardActionArea>
                  <CardMedia 
                  image="https://1.bp.blogspot.com/-l9RD4xc85rg/VqMjXEnEUdI/AAAAAAAABfo/Hc70f_sRzjY/s1600/quiz-banner.png"
                  />
                  <CardContent>
                    <p>Start Easy Quiz</p>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button>Easy</Button>
              </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
        <Card>
              <CardActionArea>
                  <CardMedia 
                  image="https://1.bp.blogspot.com/-l9RD4xc85rg/VqMjXEnEUdI/AAAAAAAABfo/Hc70f_sRzjY/s1600/quiz-banner.png"
                  />
                  <CardContent>
                    <p>Start Medium Quiz</p>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button>Medium</Button>
              </CardActions>
          </Card>
            </Grid>
            <Grid item xs={12}>
            <Card>
              <CardActionArea>
                  <CardMedia 
                  image="https://1.bp.blogspot.com/-l9RD4xc85rg/VqMjXEnEUdI/AAAAAAAABfo/Hc70f_sRzjY/s1600/quiz-banner.png"
                  />
                  <CardContent>
                    <p>Start Hard Quiz</p>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button>Hard</Button>
              </CardActions>
          </Card>
            </Grid>
            </Grid>
    </div>
    )
}
export default Quizzes;
