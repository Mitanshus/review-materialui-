import Review from "./components/Review";
import "./App.css";
import { Container, Grid, Typography,Box,Paper } from "@mui/material";

function App() {
	return (
		<Container>
			<Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
				<Grid className='title'>
					<Typography variant="h2" >our reviews</Typography>
          <Typography variant="h2"sx={{textDecoration:'overline',textDecorationColor:'blue',color:'azure',justifyContent:'center',display:'flex'}}>      """"  </Typography>
					
				</Grid>
			</Box>
			
      <Box  sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
		<Paper>
		
				<Review />
		</Paper>
        </Box>
		</Container>
	);
}

export default App;
