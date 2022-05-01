import { Button, styled, Typography } from "@mui/material";
import {Add, Settings} from '@mui/icons-material';

function App() {




  // denne code til at vi kan har flere button af den. og den er fra mui(styled). // if you are using the same color in multiple componentes you do not have to write them in every component
  const BlueButton = styled(Button)({
    backgroundColor: "black",
        textColor: "#888",
        margin:5,
        
       "&:hover":{backgroundColor:"red"}, "&:disabled":{backgroundColor:"gray", color:"white"}

  })

  
  return (
    <div>
      <Button 
      variant="text">Text
      </Button>


      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>


 
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add new post
      </Button>



      <Button variant="outlined" disabled>
        Outlined
      </Button>




      <Typography variant="h1">
      It uses h1 style but it a p tag
      </Typography>

    







      <Button
      variant="contained"
      disabled style={{
        backgroundColor: "skyblue",
        textColor: "#888",
        margin:5,
        borderWidth:5,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:100,
       borderRadius:50,
       "&:hover":{backgroundColor:"lightblue"}, "&:disabled":{backgroundColor:"gray", color:"white"}

      }}
      >
      My Unique Button</Button>


      <Button
      variant="contained"
       style={{
        backgroundColor: "red",
        textColor: "#888",
        margin:5,
        borderWidth:5,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:100,
       borderRadius:50,
       "&:hover":{backgroundColor:"redblue"}

      }}
      >
      My Unique Button</Button>



      <Button
      variant="contained"
      style={{
        backgroundColor: "black",
        textColor: "#888",
        margin:5,
        
       "&:hover":{backgroundColor:"red"}, "&:disabled":{backgroundColor:"gray", color:"white"}

      }}
      >
      My Unique Button</Button>


      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
      
    
    </div>
  );
}

export default App;
