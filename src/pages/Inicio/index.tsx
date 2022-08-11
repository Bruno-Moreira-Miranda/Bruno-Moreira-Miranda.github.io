import { Link } from "react-router-dom";
import classNames from "classnames";

import Logo from "components/UI/Logo";

import styles from "./Inicio.module.css";
import AppRoutes from "components/root/Routes/AppRoutes";

function Inicio() {
    return (
        <main className={classNames(styles.inicio, "container-main", "padding-v-main")}>
            <Logo className={styles.logo} />

            <h1 className={styles.titulo}>Boas-vindas!</h1>

            <p className={classNames(styles.texto, "mobile_only")}>
                Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!
            </p>

            <p className={classNames(styles.texto, "when_tablet_only")}>
                Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!
            </p>

            <Link
                className={classNames(styles.loginButton, "button", "button_m")}
                to={AppRoutes.login}
                role="button">
                Já tenho conta
            </Link>
            
            <Link
                className={classNames(styles.cadastrarButton, "button", "button_m")}
                to={AppRoutes.cadastro}
                role="button">
                Quero me cadastrar
            </Link>
        </main>
    );
}
export default Inicio;