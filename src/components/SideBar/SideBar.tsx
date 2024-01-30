import { AddBox, ChevronLeft, ChevronRight, Logout, Person, Search, Settings } from "@mui/icons-material";
import { Avatar, Box, IconButton, TextField, Tooltip } from "@mui/material";
import { useState } from "react";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import { useGetUserInfoQuery } from "../../services/api";


const SideBar = () => {

    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarClick = () => {
        setIsSidebarOpen(!isSidebarOpen)
    };

    const {data} = useGetUserInfoQuery({});

    const buttons = [
        {
            id: 1,
            title: 'Añadir contenido',
            icon: <AddBox sx={{width: '48px', height: '48px', color: 'white'}}/>
        },
        {
            id: 2,
            title: 'Gestion de invitados',
            icon:  <Person sx={{width: '48px', height: '48px', color: 'white'}}/>
        },
        {
            id: 3,
            title: 'Ajustes',
            icon:  <Settings sx={{width: '48px', height: '48px', color: 'white'}}/>
        }
    ];


    return (
        <Box 
            sx={{
                backgroundColor: '#191919',
                width: 
                    isSidebarOpen
                        ? '400px'
                        : '105px',
                height: 'calc(100vh - 48px)',
                borderRadius: '24px',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'width 0.2s linear', 
                position: 'sticky',
                top: '24px',
                left: '24px',
                mt: 3
            }}
        >
            {/* SIDEBAR TOP */}
            <Box
                sx={{
                    height: '120px',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    borderBottom: '1px solid white',
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                }}
            >
                <Box sx={{display: 'flex', justifyContent: 'start', alignItems: 'center', m: 3, width: '100%'}}>  {/* SIDEBAR TOP */}
                    <Box
                        sx={{
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        component={'img'}
                        src="http://localhost:5173/iconLogo.png"
                    />

                    {
                        isSidebarOpen && 
                            <Box sx={{diplay: 'flex', width: '70%', ml: 2,mt: 1, color: 'white', transition: 'display 0.2s linear', transitionDelay: '2s'}}>
                                <Box sx={{fontSize: '50px', fontWeight: 600, lineHeight: 1}}>NEXUS </Box>
                            </Box>
                    }

                </Box>
                    
            </Box>

            {/* BOTON ABRIR SIDEBAR */}
            <Draggable
                axis='y'
                bounds={{top: -30, bottom: 945}}
            >
                
                <IconButton 
                    sx={{
                        position: 'absolute', 
                        left: 
                            isSidebarOpen 
                                ? '382px' 
                                : '87px', 
                        top: '50px',
                        backgroundColor: '#408CF9',
                        transition: 'left 0.2s linear',
                        '&:hover': {
                            backgroundColor: '#408CF9'
                        }
                    }} 
                    onClick={handleSidebarClick}
                >
                    {
                        isSidebarOpen
                            ? <ChevronLeft sx={{color: 'white'}}/>
                            : <ChevronRight sx={{color: 'white'}}/>
                    }
                    
                </IconButton>
            </Draggable>


            {/* LISTA DE BOTONES SIDEBAR */}
            <Box
                sx={{
                    height: '100%',
                    mt: 3,
                    ml: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    width: '100%',
                }}
            >
                {/* BOTON SEARCH */}
                <Box
                    onClick={() => setIsSidebarOpen(true)} 
                    sx={{ 
                        backgroundColor: 'rgba(240,240,240, 0.1)', 
                        display: 'flex', 
                        flexDirection: 'row', 
                        p: 1, 
                        borderRadius: 4,
                        width: isSidebarOpen ? '360px' : '62px',
                        transition: 'width 0.2s linear',
                        cursor: 'text',
                    }}
                >
                    <Search sx={{color: 'white', height: '48px', width: '48px'}}/>
                    {
                        isSidebarOpen && 
                            <TextField 
                                variant='standard' 
                                autoFocus
                                type="text" 
                                sx={{mx: 1}} 
                                inputProps={{sx:{width: '295px', height: '36px', color: "white", fontSize: '20px'}}}
                                InputProps={{
                                    disableUnderline: true
                                }}
                            />
                    }
                </Box>

                {/* LISTA DE BOTONES */}
                {buttons.map((button) => (
                    
                    <Box key={button.id} sx={{display: 'flex', flexDirection: 'row', cursor: 'pointer', width: '90%', alignItems: 'center', textWrap: 'nowrap', overflow: 'hidden',  gap: 2, p:1, mt: 2, borderRadius: 4, '&:hover': { backgroundColor: 'rgba(240,240,240, 0.1)'}}}>
                        <Tooltip 
                            title={button.title} 
                            placement='right' 
                            slotProps={{
                                popper: {
                                  modifiers: [
                                    {
                                      name: 'offset',
                                      options: {
                                        offset: [0, 25],
                                      },
                                    },
                                  ],
                                },
                                tooltip: {sx:{ fontSize: '18px' }}
                              }} 
                              arrow 
                        >
                            {button.icon}
                        </Tooltip>
                        {
                            isSidebarOpen &&
                                <Box sx={{color: 'white', fontSize: '20px', fontWeight: 600}}>
                                    {button.title}
                                </Box>
                        }
                    </Box>
                ))}

            </Box>

            {/* BOTON LOGOUT */}
            <Box sx={{m: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <Box sx={{display:'flex', flexDirection: 'row', ml: 1.5}}>

                    <Tooltip title='Perfil' placement="right" arrow slotProps={{tooltip: {sx:{ fontSize: '18px' }}}} >
                        <IconButton >
                            <Avatar sx={{height: '64px', width: '64px'}}/>
                        </IconButton>
                    </Tooltip>

                    {
                        isSidebarOpen && 
                            <Box sx={{color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: 1, fontFamily: 'Nexa'}}>
                                <Box sx={{fontSize: '30px', fontWeight: 600}}>{data.data.user.username}</Box>
                                <Box sx={{fontSize: '16px'}}>{data.data.user.email}</Box>
                            </Box>
                    }

                </Box>


                {
                    isSidebarOpen && 
                        <Tooltip title='Cerrar sesión' placement="right">
                            <IconButton 
                                onClick={() => {
                                    window.localStorage.removeItem('refreshToken');
                                    navigate('/')
                                }}
                                sx={{mr: 1.5}}
                                >
                                <Logout sx={{height: '30px', width: '30px', color: "#FA7575"}}/>
                            </IconButton>
                        </Tooltip>
                }
            </Box>
        </Box>
    );
};

export default SideBar;
