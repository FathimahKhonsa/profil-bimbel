import { createBrowserRouter } from "react-router"
import RootLayout from "./RootLayout"
import HomePage from "../pages/Home"
import AhePage from "../pages/Ahe"
import EnglishPage from "../pages/English"
import SempoaPage from "../pages/Sempoa"
import SchoolPage from "../pages/School"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/school', element: <SchoolPage/>},
            {path: '/english', element: <EnglishPage/>},
            {path: '/sempoa', element: <SempoaPage/>},
            {path: '/ahe', element: <AhePage/>},
        ]
    }
])
