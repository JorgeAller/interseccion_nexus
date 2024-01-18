import { ErrorPage } from "./ErrorPage/ErrorPage";
import { LandingPage } from "./LandingPage/LandingPage";
import { LoginPage } from "./LoginPage/LoginPage";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import { ProximamentePage } from "./ProximamentePage/ProximamentePage";
import { TestPage } from "./TestPage/TestPage";

export const pages = {
    landing: <LandingPage />,

    errorPage: <ErrorPage />,
    notFoundPage: <NotFoundPage/>,
    proximamentePage: <ProximamentePage/>,

    // home: <HomePage/>,

    loginPage: <LoginPage/>,


    testPage: <TestPage/>
}
