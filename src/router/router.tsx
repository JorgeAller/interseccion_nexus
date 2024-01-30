import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layouts";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { RequireAuth } from "../components/RequireAuth/RequireAuth";
import { pages } from "../pages/indexs";

export const router = createBrowserRouter([

    // Rutas pública
    { path: "/", element: pages.landing },
    { path: "/*", element: pages.notFoundPage },
    { path: "/login", element: pages.loginPage},
    
    // RUTAS PRIVADAS PARA EL EQUIPO
    { path: "/", element: <RequireAuth/>, children: [
        {
            element: <Layout/>,
            errorElement: <ErrorPage/>,
            children: [
                { path: '/test', element: pages.testPage },
                { path: "/home", element: pages.home },
                { path: "/new-section", element: pages.newSection },
            ]
        }
    ]},


])