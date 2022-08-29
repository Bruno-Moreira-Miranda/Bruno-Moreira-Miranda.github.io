import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useGetUserID } from "context/user-context";

import { AppPaths } from "../AppRoutes";

function LogedRoute() {
    const navegacao = useNavigate();
    const userId = useGetUserID();

    useEffect(() => {
        !userId && navegacao(AppPaths.login, { replace: true });
    }, []);

    if (userId) return <Outlet />;
    else return null;
}
export default LogedRoute;