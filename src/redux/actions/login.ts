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

export const login = createAsyncThunk<LoginSuccessResponse, LoginProps, {rejectValue: string}>(    //LoginSuccessResponse, LoginProps, {rejectValue: string}
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