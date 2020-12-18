import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import {Radio,RadioGroup} from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { sendFeedback } from '../Services/apiService';
import{ Alert} from '@material-ui/lab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AddressForm() {
  const classes = useStyles();

  const history = useHistory();
  const [providerName, setProviderName] = React.useState('');
  const [providerEmail, setProviderEmail] = React.useState('');
  const [userType, setUserType] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [brakeWorks, setBrakeWorks] = React.useState('true');
  const [seatbeltWorks, setSeatbeltWorks] = React.useState('true');
  const [hornWorks, setHornWorks] = React.useState('true');
  const [hornAlert, setHornAlert] = React.useState('true');
  const [speed, setSpeed] = React.useState('');
  const [owerV, setOwerV] = React.useState('');
  const [otherV, setOtherV] = React.useState('');
  const [whatImprove, setWhatImprove] = React.useState('');
  const [location, setLocation] = React.useState('');
  const[formData,setFormData]=React.useState({providerName,providerEmail});
  const[alert,setAlert]=React.useState(false)

 async function  handleSubmit(e) {
e.preventDefault()
console.log(providerName)
  //  setFormData({providerName,providerEmail,userType,brakeWorks,seatbeltWorks,hornAlert,hornWorks,speed,owerV,otherV,whatImprove,location});
  
  const data={
    "providerName": providerName,
    "providerEmail": providerEmail,
    "userType": userType,
    "brakeWorks": brakeWorks,
    "seatbeltWorks": seatbeltWorks,
    "hornWorks": hornWorks,
    "hornAleart": hornAlert,
    "speed": speed,
    "owerV": owerV,
    "otherV": owerV,
    "whatImprove": whatImprove,
    "location": location,
  }
  //await setFormData({providerName,providerEmail});
   
   console.log(data);
    sendFeedback(data).then(result=>{
      setAlert(true);
    }).catch(error=>{
      
    })

    setProviderName('')
    setProviderEmail('')
    setUserType('')
    setSpeed('')
    setOwerV('')
    setOtherV('')
    setWhatImprove('')
    setLocation('')

  }


  

  return (
    <React.Fragment>
     <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Feedback
          </Typography>
          <Button color="inherit" onClick={()=>history.push('/login')}>Login</Button>
        </Toolbar>
      </AppBar>
    
    <Container> 
    {alert && <Alert severity="success" onClose={() => {setAlert(false)}}>This is a success alert — check it out!</Alert>}

      
      <p style={{textAlign:"left"}}>Vehicles are an important part of today's world life. These are the basic needs of each family. Imagine going hundreds of miles from one place to another, but today’s traffic has become faster, more comfortable, and more reliable for a vehicle.
As well as Accidents are on the rise therefore, what action should be taken by drivers to prevent or reduce accidents We are going to collect data through Survey Users and take action to reduce the accident.
</p>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="providerName"
            name="providerName"
            label="User name"
            value={providerName}
            fullWidth
            onChange={event=>setProviderName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="providerEmail"
            name="providerEmail"
            label="User email"
            value={providerEmail}
            fullWidth
            onChange={event=>setProviderEmail(event.target.value)}

          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="userType"
            name="userType"
            label="	Were you driver or passenger?"
            value={userType}
            fullWidth
            onChange={event=>setUserType(event.target.value)}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
        <div style={{textAlign:'left'}}>
        <FormLabel component="legend" >Did you apply the brake at any time prior to the impact?</FormLabel>
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div style={{textAlign:'left'}}>
        <RadioGroup aria-label="gender" name="brakeWorks" value={brakeWorks} onChange={event=>setBrakeWorks(event.target.value)}>
          <FormControlLabel value="true" control={<Radio />} label="Yes" />
          <FormControlLabel value="false" control={<Radio />} label="No" />
        </RadioGroup>
            </div>
        </Grid> 
        <Grid item xs={12} sm={6}>
        <div style={{textAlign:'left'}}>
        <FormLabel component="legend" >Did you wearing a seatbelt?</FormLabel>
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div style={{textAlign:'left'}}>
        <RadioGroup aria-label="gender" name="seatbeltWorks" value={seatbeltWorks} onChange={e=>setSeatbeltWorks(e.target.value)}>
          <FormControlLabel value="true" control={<Radio />} label="Yes" />
          <FormControlLabel value="false" control={<Radio />} label="No" />
        </RadioGroup>
            </div>
        </Grid> 
        <Grid item xs={12} sm={6}>
        <div style={{textAlign:'left'}}>
        <FormLabel component="legend" >Did you horn before the impact?</FormLabel>
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div style={{textAlign:'left'}}>
        <RadioGroup aria-label="gender" name="hornWorks" value={hornWorks} onChange={e=>setHornWorks(e.target.value)}>
          <FormControlLabel value="true" control={<Radio />} label="Yes" />
          <FormControlLabel value="false" control={<Radio />} label="No" />
        </RadioGroup>
          
            </div>
        </Grid> 
        <Grid item xs={12} sm={6}>
        <div style={{textAlign:'left'}}>
        <FormLabel component="legend" >Did the driver of the other vehicle horn before the impact?</FormLabel>
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div style={{textAlign:'left'}}>
        <RadioGroup aria-label="gender" name="hornAlert" value={hornAlert} onChange={e=>setHornAlert(e.target.value)}>
          <FormControlLabel value="true" control={<Radio />} label="Yes" />
          <FormControlLabel value="false" control={<Radio />} label="No" />
        </RadioGroup>
            </div>
        </Grid> 
        <Grid item xs={12}>
          <TextField
            required
            id="speed"
            name="speed"
            label="What was the speed of the vehicle you were driving "
            value={speed}
            fullWidth
            onChange={event=>setSpeed(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="owerV"
            name="owerV"
            label="What happened to the vehicle you were in after the impact? "
            value={owerV}
            fullWidth
            onChange={event=>setOwerV(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="otherV"
            name="otherV"
            label="What happened to the other vehicle after the impact? "
            value={otherV}
            fullWidth
            onChange={event=>setOtherV(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="whatImprove"
            name="whatImprove"
            label="Which is better to improve for prevent action? "
            value={whatImprove}
            fullWidth
            onChange={event=>setWhatImprove(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="location"
            name="location"
            label="Where did the accident happen? "
            value={location}
            fullWidth
            onChange={event=>setLocation(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
      <div style={{textAlign:'right'}}>
        <Button
        onClick={(event)=>{handleSubmit(event)}}
        variant="contained"
        color="primary"
        type="submit"
        endIcon={<Icon>send</Icon>}
      >Submit</Button>
      </div>
      </Grid>
     
      </Grid>
      <br></br>
     
      <br></br>
      <br></br>

      </Container>
    </React.Fragment>
  );
}