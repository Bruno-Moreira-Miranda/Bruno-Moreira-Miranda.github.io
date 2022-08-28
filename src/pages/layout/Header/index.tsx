import Logo from "components/UI/Logo";
import HomeButton from "./HomeButton";
import ContatoButton from "./ContatoButton";
import PerfilMiniatura from "./PerfilMiniatura";

import "styles/utils/device-only.css";
import "styles/common/container.module.css";
import styles from "./Header.module.css";
import classNames from "classnames";
import { useGetUserID } from "context/user-context";
import If from "components/utils/If";

function Header() {

    const userId = useGetUserID();

    return (
        <header className={styles.header}>
            <nav className={styles.header_nav}>
                <Logo className={classNames(styles.header_nav__logo, "when_tablet_only")} />

                <ul>
                    <li className={styles.header_nav__home}>
                        <HomeButton />
                    </li>
                    <li className={styles.header_nav__contato}>
                        <ContatoButton />
                    </li>
                </ul>
                <If condicao={userId}>
                    <PerfilMiniatura className={styles.header_nav__perfil} />
                </If>
            </nav>
        </header>
    );
}
export default Header;