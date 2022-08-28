import { Link } from "react-router-dom";
import MensagemIcon from "components/UI/Icons/Mensagem";
import AppRoutes, { AppPaths } from "Routes/AppRoutes";

function ContatoButton() {
    return (
        <Link to={AppPaths.contato} title="Ir para a seção de contato" >
            <MensagemIcon />
        </Link>
    );
}
export default ContatoButton;