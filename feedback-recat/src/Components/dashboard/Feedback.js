import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Icon, IconButton, Modal,
  Fade,
  Card,
  Badge, } from '@material-ui/core';


import Title from './Title';
import { getAllFeedbacks,getFeedbackById } from '../../Services/apiService'
// Generate Order Data


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));



export default function Orders() {

  const [feedbacks, setFeedbacks] = React.useState([]);
  const [feedbackofone, setFeedbackofone]=React.useState('');
  const [openview, setOpenview]=React.useState(false);

  function onclickHandler(e,id){
    setOpenview(true)
    getFeedbackById(id).then(result=>{
      setFeedbackofone(result.data)
    })
    console.log(id)
  }

  function onclode(){
    setOpenview(false)
  }
  useEffect(() => {

    console.log("data kasdjh ")

    // Update the document title using the browser API
    getAllFeedbacks().then(result => {
      setFeedbacks(result.data);
      console.log("data kasdjh ")
    }).catch();
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Feedbacks</Title>
      <Table size="small">
        <TableHead>
          <TableRow>

            <TableCell>Provider Name</TableCell>
            <TableCell>Provider Email</TableCell>
            <TableCell>Feedback Date </TableCell>
            <TableCell>Action </TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {feedbacks.map((feedback) => (
            <TableRow key={feedback.id}>
              <TableCell>{feedback.providerName}</TableCell>
              <TableCell>{feedback.providerEmail}</TableCell>
              <TableCell>{feedback.feedBackDate}</TableCell>
              <TableCell ><IconButton><Icon color="primary" onClick={e => onclickHandler(e,feedback.id)}>edit</Icon></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more 
        </Link>
      </div>

      <Modal
                open={openview}
                onClose={e=> onclode()}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
               <Fade in={openview}>
                    <div style={{
                        background:'white',
                        border: '',
                        padding:(0,2,5,6)
                    }}>
                      <div style={{textAlign:'right'}}><Badge badgeContent={'x'} color="error" onClick={e=> onclode()}></Badge></div> 
                        <Card  style={{height: '45rem', width:'35rem'}}>
                        <Table className="product-table">
                            <TableBody>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">Provider Name</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.providerName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">Provider Email</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.providerEmail}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">User Type</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.userType}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">Did you apply the brake?</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.brakeWorks===true ?'Yes':'No'}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">Did you wearing a seatbelt</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.seatbeltWorks===true ?'Yes':'No'}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">7.	Did you horn before the impact?</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.hornWorks===true ?'Yes':'No'}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">9.	Did the driver of the other vehicle honk the horn before the impact?</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.hornAleart===true ?'Yes':'No'}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">Which speed the vehicle travel?</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.speed}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">Which system need to be improved to avoid this accident?</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.whatImprove}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">What are the damages in your vehicle?</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.owerV}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">What are the damages in other's vehicle?</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.otherV}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0 capitalize" colSpan={2} align="left">Where this happened?</TableCell>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">: {feedbackofone && feedbackofone.location}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                       

                        </Card>
                    </div>
                </Fade>
            </Modal>


    </React.Fragment>
  );
}
