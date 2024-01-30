import { Logout } from "@mui/icons-material"
import {Box, IconButton} from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../redux/hooks/useAppDispatch"
import { logout, setAccessToken } from "../redux/slices/authSlice"
import SideBar from "../components/SideBar/SideBar"

export const Layout = () => {

    const navigate = useNavigate();

    return (
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <SideBar/>
            <Box sx={{ml: '80px', mt: '24px'}}>

                <Outlet/>
            </Box>
        </Box>
    )
}