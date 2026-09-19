import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import VisiMisi from "../pages/VisiMisi"
import Award from "../pages/Award"
import Board from "../pages/Board"
import LifeAt from "../pages/LifeAt"
import GrowWith from "../pages/GrowWith"
import ContactUs from "../pages/ContactUs"
import Terimakasih from "../pages/Terimakasih"
import IgGalerry from "../pages/IgGalerry"
import WebGallery from "../pages/WebGallery"
import DetailNews from "../pages/DetailNews"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/visi-misi',
        element: <VisiMisi />,
    },
    {
        path: '/award',
        element: <Award />,
    },
    {
        path: '/board',
        element: <Board />,
    },
    {
        path: '/life-at',
        element: <LifeAt />,
    },
    {
        path: '/grow-with',
        element: <GrowWith />,
    },
    {
        path: '/contact-us',
        element: <ContactUs />,
    },
    {
        path: '/terimakasih',
        element: <Terimakasih />,
    },
    {
        path: '/gallery',
        element: <IgGalerry />,
    },
    {
        path: '/web-gallery',
        element: <WebGallery />,
    },
    {
        path: '/detail-news',
        element: <DetailNews />,
    },
])

export default router