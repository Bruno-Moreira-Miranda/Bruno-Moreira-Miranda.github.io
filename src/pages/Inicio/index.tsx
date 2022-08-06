import { Link } from "react-router-dom";
import classNames from "classnames";

import Logo from "components/UI/Logo";

import "styles/container.module.css";
import "styles/components/button.module.css";

import styles from "./Inicio.module.css";
import AppRoutes from "components/root/Routes/AppRoutes";


function Inicio() {
    return (
        <main className={classNames(styles.inicio, "container", "main-v-padding")}>
            <Logo className={styles.logo} />

            <h1 className={styles.titulo}><em>Boas-vindas!</em></h1>

            <p className={styles.texto}>Que tal mudar sua vida <strong>adotando</strong> seu novo melhor amigo? Vem com a gente!</p>

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