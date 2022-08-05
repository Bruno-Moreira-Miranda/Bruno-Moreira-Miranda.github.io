import { Link } from "react-router-dom";

import AppRoutes from "components/root/Routes/AppRoutes";
import HomeIcon from "components/UI/HomeIcon";

function HomeButton() {
    return (
        <Link to={AppRoutes.home} title="Ir para Home" >
            <HomeIcon />
        </Link>
    );
}
export default HomeButton;