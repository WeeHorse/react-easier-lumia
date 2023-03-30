import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";

export default function () {

    return <RouterProvider router={
        createBrowserRouter(
            createRoutesFromElements(
                <Route element={<App/>}>
                    <Route path={'/'} element={<Shop/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Route>
            )
        )
    } />
}
