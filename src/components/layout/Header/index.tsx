import Logo from "components/UI/Logo";
import HomeButton from "./HomeButton";
import ContatoButton from "./ContatoButton";
import PerfilMiniatura from "./PerfilMiniatura";

import "styles/utils/device-only.css";
import "styles/common/container.module.css";
import styles from "./Header.module.css";
import classNames from "classnames";

function Header() {
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

                <PerfilMiniatura className={styles.header_nav__perfil} />
            </nav>
        </header>
    );
}
export default Header;