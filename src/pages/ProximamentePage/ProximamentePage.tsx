import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
//import useGetURLs from "../../hooks/useGetURLs"

// import { useAppSelector } from "../../redux/hooks/useAppSelector"

export const ProximamentePage = () => {
    // const selectedColor = useAppSelector((state)=>state.configuration.color);

    //const {BASIC_URL} = useGetURLs();

    return (
            <Box sx={{backgroundColor: 'black'}}>
                <video
                    src={`http://localhost:5173/videos/Sphere_1_1080x1080_12sec.mp4`}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    className="videoLanding"
                />
                <Box  sx={{display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center', zIndex: 1000}}>

                    <Typography className='wrapper' style={{ fontWeight: 700}} sx={{color: 'white', textAlign: 'center',fontSize: {xs: '40px', md:'60px', xl: '80px'}}}>PRÓXIMAMENTE</Typography>
                    
                    <Box sx={{width: '120px', height: '60px', mt: 4}}>
                        <Button component={Link} to='/'  sx={{width: '100%', height: '100%', bgcolor: 'red', border: `2px solid black`, '&:hover': {bgcolor: 'black', border: '2px solid white'}}} variant="contained" >ATRAS</Button>
                    </Box>
                    
                </Box>
            </Box>
    )
}