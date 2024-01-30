import { ErrorPage } from "./ErrorPage/ErrorPage";
import { HomePage } from "./HomePage/HomePage";
import { LandingPage } from "./LandingPage/LandingPage";
import { LoginPage } from "./LoginPage/LoginPage";
import { NewSectionPage } from "./NewSectionPage/NewSectionPage";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import { ProximamentePage } from "./ProximamentePage/ProximamentePage";
import { TestPage } from "./TestPage/TestPage";

export const pages = {
    landing: <LandingPage />,

    errorPage: <ErrorPage />,
    notFoundPage: <NotFoundPage/>,
    proximamentePage: <ProximamentePage/>,

    home: <HomePage/>,
    newSection: <NewSectionPage/>,

    loginPage: <LoginPage/>,


    testPage: <TestPage/>
}
