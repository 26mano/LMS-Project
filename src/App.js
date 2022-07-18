import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar,Typography,Link } from '@mui/material';
import { Container } from '@mui/system';
import Home from './Components/Home';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Container>

   
     <AppBar >
      <Toolbar sx={{  display:"flex" , flexGrow:0}} >
        <img src={logo} alt="" width="50px" /> 
        <Typography sx={{ flexGrow:0}} > MNC</Typography>
        <Typography sx={{ display:"flex" , color:"white", flexGrow :1 , order:1}}  />
        <Link to="#" sx={{ display:"flex" , color:"white", flexGrow :0 , order:1, p:"10px" , textDecoration:"none"}} >Blog</Link>
        <Link to="#" sx={{ display:"flex" , color:"white", flexGrow :0 , order:2, p:"10px", textDecoration:"none"}} >Services</Link>
        <Link to="#" sx={{ display:"flex" , color:"white", flexGrow :0 , order:3, p:"10px", textDecoration:"none"}} >Career</Link>
        <Link to="#" sx={{ display:"flex" , color:"white", flexGrow :0 , order:4, p:"10px", textDecoration:"none"}} >Contact</Link>

      </Toolbar>
     </AppBar>
     </Container>
     <Home />
    </div>
  );
}

export default App;
