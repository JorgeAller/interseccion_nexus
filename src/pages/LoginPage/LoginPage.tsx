/* eslint-disable no-useless-escape */
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAppDispatch } from '../../redux/hooks/useAppDispatch'
import { Link } from 'react-router-dom'
import { Home } from '@mui/icons-material'
// import useGetURLs from '../../hooks/useGetURLs'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublicInstance } from "../../services/axios";
import { AxiosError } from "axios";

interface LoginProps {
    user: {
        email?: string;
        username?: string;
    };
    password: string;
}

interface LoginSuccessResponse {
    status:  string;
    data: {
        accessToken: string;
        refreshToken: string
    }
}

const login = createAsyncThunk<LoginSuccessResponse, LoginProps, {rejectValue: string}>(    //LoginSuccessResponse, LoginProps, {rejectValue: string}
    'login',
    async({user, password}: LoginProps, {rejectWithValue}) => {
        try {
            const response = await axiosPublicInstance.post('/users/login', {user, password});
            console.log(response.data)
            window.localStorage.setItem('refreshToken', response.data.data.refreshToken)
            return response.data;
        } catch (error){
            if(error instanceof AxiosError) {
                if(error.response && error.response.data.message){
                    return rejectWithValue(error.response.data.message);
                } else {
                    return rejectWithValue(error.message)
                }
            }
        }
    }
)

export const LoginPage = () => {

    const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const dispatch = useAppDispatch();

    // const selectedColor = useAppSelector((state) => state.configuration.color)

//    const navigate = useNavigate();

    // const {BASIC_URL} = useGetURLs  ();

    const loginFormSchema = yup.object({
        user: yup.string().required('USUARIO REQUERIDO'),
        password: yup.string().required('CONTRASEÑA REQUERIDO')
    }).required();

    const {register, formState: {errors}, handleSubmit} = useForm<any>({
        resolver: yupResolver(loginFormSchema)
    });

    const onSubmit = async (data: any) => {
        console.log({data})

        if(emailRegex.test(data.user)){
            dispatch(login({user: {email: data.user}, password: data.password }))
        } else {
            dispatch(login({user: {username: data.user}, password: data.password }))
        }
        console.log(data.user)
        // dispatch(login(data))
    }

  /*   const nombres = [
        {
            name: 'HUB',
            description: ' La plataforma centralizada que potencia la colaboración y gestión eficiente del equipo para el festival Interseccion. Proporciona acceso personalizado a contenido, herramientas de carga de datos con formularios específicos y un hub de información integral.'
        },
        {
            name: 'NEXUS',
            description: 'Conecta, organiza y simplifica la experiencia del equipo en Interseccion. Desde contenido personalizado hasta herramientas de carga especializadas, Nexus es la clave para gestionar todos los aspectos del festival de manera efectiva.'
        },
        {
            name: 'PULSE',
            description: 'Siente el pulso del festival con Interseccion Pulse. Una plataforma integral que ofrece acceso personalizado, herramientas de carga optimizadas y la capacidad de gestionar noticias, convocatorias y horarios para que tu equipo esté siempre en sintonía.'
        },
        {
            name: 'SYNC',
            description: 'Logra la sincronización perfecta en la gestión del festival Interseccion. Sync proporciona acceso exclusivo, formularios especializados para la carga de contenido y funciones avanzadas para gestionar eficazmente noticias, convocatorias y horarios.'
        },
        {
            name: 'FUSION',
            description: 'Fusiona todas las necesidades de gestión del equipo en una plataforma: acceso personalizado, carga de contenido simplificada y capacidades avanzadas para administrar noticias, convocatorias y horarios. Interseccion Fusion, donde convergen todas las posibilidades.'
        },
    ] */

    // const generalDescription = `Interseccion ${nombres[0].name} es una plataforma integral diseñada para potenciar la colaboración y la eficiencia en la gestión del equipo del festival. Ofrece acceso personalizado, herramientas de carga de contenido especializadas y funcionalidades avanzadas para gestionar noticias, convocatorias y horarios. Experimenta la centralización, la conexión y la sincronización en una única solución, optimizando todos los aspectos de la participación en Interseccion.`


    return (
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Box 
                component='form'
                onSubmit={handleSubmit(onSubmit)} 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    width: '40%',
                    maxWidth: '700px',
                    height: '100vh', 
                    gap: 2, 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    backgroundColor: 'green', 
                    border: '5px solid black',
                }}
            >   
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'end', position: 'relative', top: 200}}>
                    <Box sx={{height: '90px', width: '90px', mr: 1}}>
                        <Box component={'img'} src={`http://localhost:5173/iconLogo.png`} style={{width: '90px', height: '90px', marginBottom: 0}}/>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{fontWeight: 900, fontSize: '47px', textAlign: 'start'}}>INTERSECCIÓN</Box>
                        <Box sx={{fontWeight: 900, fontSize: '47px', textAlign: 'start'}}>NEXUS</Box>
                    </Box>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>

                    <TextField 
                        type='text'
                        placeholder='LOGIN'
                        autoComplete='off'
                        {...register('user', {required: true})}
                        error={!!errors.user}
                        color='primary'
                        sx={{
                            width: '80%',
                        }}
                        InputProps={{
                            sx: {
                                backgroundColor: 'white',
                                height: '65px',
                                fontSize: '20px',
                                border: '1px solid black'

                            }
                        }}
                    />
                    <TextField 
                        type='password'
                        placeholder='PASSWORD'
                        autoComplete='off'
                        {...register('password', {required: true})}
                        error={!!errors.password}
                        sx={{
                            width: '80%',
                            mt: 2
                        }}
                        InputProps={{
                            sx: {
                                backgroundColor: 'white',
                                height: '65px',
                                fontSize: '18px',
                                border: '1px solid black',
                            }
                        }}
                    />
                    <Button type='submit' variant='contained' sx={{color: 'green', fontSize: '20px', fontWeight: 600, mt: 3, width: '33%', height: '50px', backgroundColor: 'black', '&:hover': {backgroundColor: 'black', boxShadow: '1px 1px 20px grey', color: 'white'}}}>
                        LOGIN
                    </Button>
                </Box>
                
                <IconButton href='/' sx={{mb: 5}}>
                    <Home sx={{color: 'black', fontSize: '50px'}}/>
                </IconButton>

            </Box>


                <Link to={'/test'}>NAVIGATE</Link>
        </Box>
    )
}
