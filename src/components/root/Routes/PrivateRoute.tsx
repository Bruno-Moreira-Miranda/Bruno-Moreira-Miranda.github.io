import { Outlet, Route } from "react-router-dom";

interface Props {
    ehPermitdo: boolean
    CustomError: JSX.Element
}

function PrivateRoute({ ehPermitdo, CustomError }: Props) {
    return ehPermitdo
        ? <Outlet />
        : CustomError || <p>Rota Privada</p>;
}
export default PrivateRoute;