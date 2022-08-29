import { Route, Routes } from "react-router-dom";

import Cadastro from "pages/Cadastro";
import Inicio from "pages/Inicio";
import Login from "pages/Login";
import Home from "pages/Home";
import Contato from "pages/Contato";
import Perfil from "pages/Perfil";
import LogedRoute from "./custom-route/LogedRoute";

enum AppPaths {
    inicio = "/",
    login = "/login",
    cadastro = "/cadastro",
    home = "/home",
    contato = "/contato",
    perfil = "/perfil"
}

function AppRoutes() {
    return (
        <Routes>
            <Route element={<LogedRoute />}>
                <Route path={AppPaths.home} element={<Home />} />
                <Route path={AppPaths.perfil} element={<Perfil />} />
            </Route>
            <Route path={AppPaths.inicio} element={<Inicio />} />
            <Route path={AppPaths.cadastro} element={<Cadastro />} />
            <Route path={AppPaths.login} element={<Login />} />
            <Route path={AppPaths.contato} element={<Contato />} />
            <Route path="*" element={<p style={{ color: "black" }}>not found</p>} />
        </Routes >
    );
}


export default AppRoutes;
export { AppPaths };