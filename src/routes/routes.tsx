import { createBrowserRouter } from "react-router";
import ChangePassword from "../components/ChangePassword";
import MyWishList from "../components/MyWishList";
import OderHistory from "../components/OderHistory";
import ProfileForm from "../components/ProfileForm";
import Layout from "../Layout/Layout";
import AccountLayout from "../page/AccountLayout";
import AllCards from "../page/AllCards";
import AllSetsCards from "../page/AllSetsCards";
import CardSetExplorer from "../page/CardSetExplorer";
import DetailsPage from "../page/DetailsPage";
import Home from "../page/Home";
import LoginPage from "../page/LoginPage";
import LoginPageOrAccountPage from "../page/LoginPageOrAccountPage";
import NewsPage from "../page/NewsPage";
import NotFound from "../page/NotFound";
import ResultPickachuPage from "../page/ResultPickachuPage";
import ShopPage from "../page/ShopPage";
import SignUp from "../page/SignUp";
import NewsDetailsPage from "../page/newsDetailspage";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home
            }, {
                path: "/cardDetails/:id",
                Component: DetailsPage
            }, {
                path: "/AllSetscards",
                Component: AllSetsCards
            }, {
                path: "/news-article",
                Component: NewsPage
            }, {
                path: "/news/:title",
                Component: NewsDetailsPage
            }, {
                path: "/cardSetExplorer/:id",
                Component: CardSetExplorer
            }, {
                path: "/signup",
                Component: SignUp
            }, {
                path: "/login",
                Component: LoginPage
            }, {
                path: "/all-cards",
                Component: AllCards
            }, {
                path: "/Shop",
                Component: ShopPage
            }, {
                path: '/pikachu',
                Component: ResultPickachuPage
            }, {
                path: "/logOrAccount",
                Component: LoginPageOrAccountPage
            }, {
                path: "/*",
                Component: NotFound
            }, {
                path: "/account",
                Component: AccountLayout,
                children: [
                    {
                        path: "/account",
                        Component: ProfileForm
                    }, {
                        path: "profile-form",
                        Component: ProfileForm
                    }, {
                        path: "oder-history",
                        Component: OderHistory
                    }, {
                        path: "wish",
                        Component: MyWishList
                    }, {
                        path: "password",
                        Component: ChangePassword
                    }
                ]
            }
        ]
    }
])