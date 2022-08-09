import Logo from "components/UI/Logo";
import HomeButton from "./HomeButton";
import ContatoButton from "./ContatoButton";
import PerfilMiniatura from "./PerfilMiniatura";

import "styles/common/container.module.css";
import styles from "./Header.module.css";
import classNames from "classnames";

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.header_nav}>
                <Logo className={classNames(styles.logo, "when_tablet_only")} />

                <ul>
                    <li>
                        <HomeButton />
                    </li>
                    <li>
                        <ContatoButton />
                    </li>
                </ul>

                <PerfilMiniatura />
            </nav>
        </header>
    );
}
export default Header;