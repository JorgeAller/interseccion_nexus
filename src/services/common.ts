import { AxiosError, AxiosResponse } from "axios";
import { store } from "../redux/store"
import { authSlice } from "../redux/slices/authSlice";

export const unwrapAxiosResponse = (response: AxiosResponse) => Promise.resolve(response.data)

export const retryFunction = (failureCount: number | boolean | null, error: AxiosError) => {
    if(error.response?.status === 401){

        store.dispatch(authSlice.actions.logout());

        console.log('error obteniendo la data')

        return false
        
    }

    if(error.response?.status === 406){
        store.dispatch(authSlice.actions.logout());
        console.log('El token ha expirado')
    }
    return false
};

export const errorRespondeHandler = (response: AxiosResponse) => {

   const isError = !!response.status

   if(isError){
       console.log('hola')
   }
}