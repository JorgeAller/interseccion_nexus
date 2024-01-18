import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/useAppSelector"

export const RequireAuth = () => {
    const authStore = useAppSelector((state) => state.auth);
    const refreshToken = window.localStorage.getItem('refreshToken')

    return (refreshToken) ? <Outlet/> : <Navigate to={'/login'}/>
}