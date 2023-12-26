import './App.css';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AttributionIcon from '@mui/icons-material/Attribution';
import LockPersonSharpIcon from '@mui/icons-material/LockPersonSharp';
import Switch from '@mui/material/Switch';
import Sign from './formControl/SSign';
import Login from './formControl/LLogin';
const theme = createTheme({
  palette: {
    primary: {
      main: '#2ecc71', // Black color
    },
    text: {
      primary: '#ffffff', // White text on black background
    },
  },
});

function App() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
  <Paper elevation={6} style={{padding:"15px", backgroundColor:"#f0f0f0"}}>
    {checked ? ( 
      <ThemeProvider theme={theme}>
      <Chip icon={<LockPersonSharpIcon />} label="Login" color="primary" variant="outlined" />
    </ThemeProvider>

    
    ):(
      <ThemeProvider theme={theme}>
      <Chip icon={<AttributionIcon />} label="Sign Up" color="primary" variant="outlined" />
    </ThemeProvider>
    
    )}

     <br/>

     <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      style={{
        color: checked ? 'primary' : undefined,  // Color when checked
      }}
    />
     <br/>

     {checked ? <Login/>:<Sign/>}
  </Paper>
    </div>
  );
}

export default App;
