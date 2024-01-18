import { SocialIcon } from "react-social-icons";
//import BotonesNegros from "../BotonesNegros/BotonesNegros";
//import DesplegablesHeader from "../DesplegablesHeader/DesplegablesHeader";
import "./style.css";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
//import { BotonesIdioma } from "../BotonesIdioma/BotonesIdioma";
import { BottomNavigation, BottomNavigationAction, Box, Divider } from "@mui/material";
//import { BotonesColores } from "../BotonesColores/BotonesColores";
//import LogoInterseccion from "../LogoInterseccion/LogoInterseccion";
import { useScreenSize } from "../../hooks/useScreenSize";
import { styles } from './styles';
import { CSSProperties } from "react";


const SideBar = () => {

    const intl = useIntl();

    const fecha = intl.formatMessage({ id: "fecha" });
    const lugar = intl.formatMessage({ id: "lugar" });


    const selectedColor = useSelector((state: any)=>state.configuration.color);
  
    const {isScreenSizeXSorSM} = useScreenSize();

    const socialIcons = [
        {
            id: 1,
            name: "twitter",
            url: "https://x.com/interseccion__"
        },
        {
            id: 2,
            name: "instagram",
            url: "https://www.instagram.com/interseccionfestival/"
        },
        {
            id: 3,
            name: "facebook",
            url: "https://www.facebook.com/interseccionfestival/"
        },
        {
            id: 4,
            name: "youtube",
            url: "https://www.youtube.com/channel/UCpe2PXJKq0r_jrYjV7xVpjA"
        },
        {
            id: 5,
            name: "linkedin",
            url: "https://www.linkedin.com/company/interseccionfestival/mycompany/"
        },

    ]

    return (
        <Box sx={styles.container}>
            
            <Box
                sx={{ 
                    backgroundColor: selectedColor,
                    ...styles.secondContainer
                }}
            >
                {/* <LogoInterseccion/> */}

            
                <Divider sx={styles.divider}/>
                
                <Box sx={styles.fechaLugarContainer}>

                    <Box sx={styles.fechaContainer}>
                        <Box>{fecha}</Box>
                        <hr    
                            style={{
                                ...styles.lineaFechaLugar as CSSProperties,
                                width: 
                                    isScreenSizeXSorSM
                                        ? 'calc(100vw - 40px - 70px - 140px - 40px)' 
                                        : 'calc(330px - 40px - 70px - 140px - 20px)', 
                            }}
                        />
                        <Box>2023</Box>
                    </Box>

                    <Box sx={styles.lugarContainer}>
                        <Box>A CORUÑA</Box>
                        <hr 
                            style={{
                                ...styles.lineaFechaLugar as CSSProperties,
                                width: 
                                    isScreenSizeXSorSM 
                                        ? 'calc(100vw - 40px - 70px - 200px - 40px)' 
                                        : 'calc(330px - 40px - 70px - 180px - 20px)', 
                            }}
                        />
                        <Box>{lugar}</Box>
                    </Box>

                </Box>
                
                <Box sx={styles.socialsAndLangs}>

                    <BottomNavigation  sx={styles.socials}>
                        {
                            socialIcons.map((icon) => (
                                <BottomNavigationAction 
                                    key={icon.id}
                                    icon={
                                        <SocialIcon
                                            className="socialIcon"
                                            bgColor="black"
                                            fgColor="none"
                                            url={icon.url}
                                            style={{ height: 30, width: 30 }}
                                            target="_blank"
                                        />
                                    }
                                    sx={{minWidth: '30px', maxWidth: '30px'}}
                            
                                />
                            ))
                        }
                                        
                    </BottomNavigation>

                    {/* <BotonesIdioma/> */}
                </Box>

                <Divider sx={styles.divider}/>

                {/* <BotonesNegros/> */}
                
                {/* {isScreenSizeXSorSM && <BotonesColores/>} */}

                {/* <DesplegablesHeader/> */}
                
            </Box>
        </Box>
    );
};

export default SideBar;
