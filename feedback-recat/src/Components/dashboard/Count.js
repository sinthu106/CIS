
import React, { useState, useEffect } from 'react';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { getAllFeedbacks,getFeedbackById } from '../../Services/apiService'


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  var today=new Date();
  
  const [feedbacks, setFeedbacks] = React.useState([]);


  useEffect(() => {

    console.log("data kasdjh ")
    
    // Update the document title using the browser API
    getAllFeedbacks().then(result => {
      setFeedbacks(result.data);
     
    }).catch();
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Feedbacks</Title>
      <Typography component="p" variant="h4">
       {feedbacks.length}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Till - {today.toString().slice(0,16)}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          
        </Link>
      </div>
    </React.Fragment>
  );
}
