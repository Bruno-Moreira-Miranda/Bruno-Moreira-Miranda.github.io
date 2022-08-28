import { Link } from "react-router-dom";

import AppRoutes, { AppPaths } from "Routes/AppRoutes";
import HomeIcon from "components/UI/Icons/Home";

function HomeButton() {
    return (
        <Link to={AppPaths.home} title="Ir para Home" >
            <HomeIcon />
        </Link>
    );
}
export default HomeButton;