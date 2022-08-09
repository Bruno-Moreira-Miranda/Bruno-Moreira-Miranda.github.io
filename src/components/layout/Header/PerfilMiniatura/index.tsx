import { Link } from "react-router-dom";

import AppRoutes from "components/root/Routes/AppRoutes";
import PerfilIcon from "components/UI/PerfilIcon";

interface Props {
    className: string
}

function PerfilMiniatura({ className }: Props) {
    return (
        <Link className={className}
            to={AppRoutes.perfil}
            title="Ver perfil" 
        >
            <PerfilIcon />
        </Link>
    );
}
export default PerfilMiniatura;