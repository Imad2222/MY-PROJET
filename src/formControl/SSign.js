import React from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert';
import { useState } from 'react';


// condition 
const isEmail=(email)=>
 /^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(email);


const passwordRegex=(passwordd)=>
 /^(?=.*[!@#$%^&*()-_=+{}[\]:;<>,.?/\\|])\S*\d\S*$/i.test(passwordd);
  
// password show
export default function Sign() {
  const [showPassword, setShowPassword] = React.useState(false);
//Input 
  const [UsernameInput, setUsernameInput] = useState();
  const [emailInput, setemailInput] = useState();
  const [passwordInput, setpasswordInput] = useState();

// Input Error
  const [UsernameError, setUsernameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);

//
  const [formValid,setformValid]= useState();
  const [success,setsuccess]=useState();

//validation Username
  const handleUsername =()=>{
    if(!UsernameInput || UsernameInput.length<4 || UsernameInput>20){
      setUsernameError(true);
      return;
    }
    setUsernameError(false);
  };


//validation email
  const handeEmail =()=>{
    if(!isEmail(emailInput)){
      setemailError(true);
      return;
    }
    setemailError(false);
  };

//validation pass
  const handePassword =()=>{
    if(!passwordRegex(passwordInput)){
      setpasswordError(true);
      return;
    }
    setpasswordError(false);
  };

// submit 
  const handlesubmit =(e)=>{
    e.preventDefault();

    setsuccess(null); // pour ne s'affiche pas l'erreur et la validation au meme temps 

   
   if(UsernameError || !UsernameInput){
    setformValid(
      "Username is Between 4 - 20 characters long. please Re-Enter"
    );
    return;
   }


   if(emailError || !emailInput){
    setformValid(
      "Email is InValid. please Re-Enter"
    );
    return;
   }



   if(passwordError || !passwordInput){
    setformValid(
      "at least one symbol and at least one number must be present. please Re-Enter"
    );
    return;
   }
   setformValid(null);
   setsuccess("Form Submitted Successfully");


    console.log(UsernameInput);
    console.log(emailInput);
    console.log(passwordInput);

  };


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  

  return (
    <div>
      <p>
      <TextField id="standard-basic" label="Username" variant="standard" fullWidth size="small" 
                  value={UsernameInput} onChange={(event)=>setUsernameInput(event.target.value)}
                  error={UsernameError} onBlur={handleUsername}/>
      </p>

      <p>
      <TextField id="standard-basic" label="Email" variant="standard" fullWidth size="small"
                  value={emailInput} onChange={(event)=>setemailInput(event.target.value)} 
                  error={emailError} onBlur={handeEmail}/>
      </p>

      <p>
      <FormControl sx={{  width: '100%' }} variant="standard">
          <InputLabel error={passwordError} htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            error={passwordError}
            onBlur={handePassword}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={passwordInput} onChange={(event)=>setpasswordInput(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </p>

      <p>
      <Button
      fullWidth
      onClick={handlesubmit}
      variant="contained"
      startIcon={<LoginIcon />}
      style={{ backgroundColor: '#2ecc71', color: 'white' }}
     >
      Sign Up
     </Button>
      </p>
      <p>
        {formValid && (<Alert severity="error">{formValid}</Alert>)}
      </p>
      <p>
        {success && (<Alert severity="success">{success}</Alert>)}
      </p>

    </div>
  )
}
