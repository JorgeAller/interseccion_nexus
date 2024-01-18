import axios, { AxiosError } from "axios";
import {store} from "../redux/store"
import { authSlice } from "../redux/slices/authSlice";
import { useNavigate } from 'react-router-dom';

interface RefreshTokenResponse {
    status: string;
    data: {
        accessToken:  string;
        refreshToken: string;
    }
}

const BASE_URL_BBDD = 'http://localhost:4000';

// 01. INSTANCIA PARA EL LOGIN O LAS REQUEST PUBLICAS 
export const axiosPublicInstance = axios.create({
    baseURL: BASE_URL_BBDD,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
});

// 02. INSTANCIA PARA LAS REQUEST PRIVADAS (Solo refreshToken) El refreshToken va en el header
const axiosPrivateRefreshTokenInstance = axios.create({
    baseURL: BASE_URL_BBDD,
    headers: {'Content-Type': 'application/json'},
    withCredentials: false
});

axiosPrivateRefreshTokenInstance.interceptors.request.use(
    (config) => {
        if(!config.headers!['Authorization']){
            if(store.getState().auth.refreshToken) {
                config.headers!['Authorization'] = `${store.getState().auth.refreshToken}`
            } else {
                console.log(window.localStorage.getItem('refreshToken'))
                config.headers!['Authorization'] = `${window.localStorage.getItem('refreshToken')}`
            }
        }
        return config
    },
    (error) => Promise.reject(error)
);

// 03. INSTANCIA PARA REQUEST PRIVADAS (Todas menos refreshToken) El accessToken está en el header
export const axiosPrivateInstance = axios.create({ 
    baseURL: BASE_URL_BBDD,
    headers: {'Content-Type': 'application/json'},
    withCredentials: false
});

axiosPrivateInstance.interceptors.request.use(
    (config) => {

        if(!config.headers!['Authorization']){
            config.headers!['Authorization'] = `${store.getState().auth.accessToken}`
        }
        return config
    },
    (error) => Promise.reject(error)
);

axiosPrivateInstance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {

        const previousRequest = {...error.config, sent: false, headers: {Authorization: ''}};

        if(error.response?.status === 401 && !previousRequest.sent){                            //Falta la cabecera de autenticacion
            previousRequest.sent = true;

            console.log('Refrescando el accessToken');

            const {data} = await axiosPrivateRefreshTokenInstance.post<RefreshTokenResponse>('/users/refresh');

            console.log({data})

            store.dispatch(authSlice.actions.setAccessToken(data.data.accessToken));            // REDUX UPDATE
            previousRequest.headers['Authorization'] = `${data.data.accessToken}`;              // AXIOS UPDATE

            return axiosPrivateInstance(previousRequest)
        }

        return Promise.reject(error)
    }
)

