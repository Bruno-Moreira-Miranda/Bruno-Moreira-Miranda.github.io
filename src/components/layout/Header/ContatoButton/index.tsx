import { Link } from "react-router-dom";
import MensagemIcon from "components/UI/MensagemIcon";
import AppRoutes from "components/root/Routes/AppRoutes";

function ContatoButton() {
    return (
        <Link to={AppRoutes.contato} title="Ir para a seção de contato" >
            <MensagemIcon />
        </Link>
    );
}
export default ContatoButton;