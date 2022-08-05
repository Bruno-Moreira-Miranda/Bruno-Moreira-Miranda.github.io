import { Link } from "react-router-dom";

import AppRoutes from "components/root/Routes/AppRoutes";
import PerfilIcon from "components/UI/PerfilIcon";

function PerfilMiniatura() {
    return (
        <Link to={AppRoutes.perfil} title="Ver perfil" >
            <PerfilIcon />
        </Link>
    );
}
export default PerfilMiniatura;