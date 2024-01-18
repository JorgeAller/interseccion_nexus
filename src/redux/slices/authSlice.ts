import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { router } from "../../router/router";
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

interface IState {
    isLoading: boolean;
    errorMessage: null | string,
    accessToken: null | string,
    refreshToken: null | string,
    permissions: string[],
    name: null | string
}
const initialState: IState = {
    isLoading: false,
    errorMessage: null,
    accessToken: null,
    refreshToken: null,
    permissions: [],
    name: null
}

export const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        setErrorMessage: (state, action: PayloadAction<string>) => {state.errorMessage = action.payload},
        cleanErrorMessage: (state) => {state.errorMessage = null},
        setAccessToken: (state, action: PayloadAction<string>) => {state.accessToken = action.payload},
        setRefreshToken: (state, action: PayloadAction<string>) => {state.refreshToken = action.payload},
        setPermissions: (state, action: PayloadAction<string[]>) => {state.permissions = action.payload},
        setName: (state, action: PayloadAction<string>) => {state.name = action.payload},
        logout: () => {
            window.localStorage.removeItem('refreshToken')
            router.navigate('/')
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                if(payload.status === 'ok'){
                    state.errorMessage =  null,
                    state.accessToken = payload.data.accessToken,
                    state.refreshToken = payload.data.refreshToken
                } else {
                    state.errorMessage = 'NO LOGIN' //TODO: Traducir
                }
            })
            .addCase(login.rejected, (state, {payload}) => {
                if(payload){
                    state.isLoading = false;
                    state.errorMessage = payload
                }
            })
    }
});

export const {
    setErrorMessage,
    cleanErrorMessage,
    setAccessToken,
    setRefreshToken,
    setPermissions,
    setName,
    logout,
} = authSlice.actions