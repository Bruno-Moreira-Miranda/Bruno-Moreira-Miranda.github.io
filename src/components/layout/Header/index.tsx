import HomeButton from "./HomeButton";
import ContatoButton from "./ContatoButton";
import PerfilMiniatura from "./PerfilMiniatura";

import "styles/container.module.css";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.header_nav}>
                <HomeButton />
                <ContatoButton />
                <PerfilMiniatura />
            </nav>
        </header>
    );
}
export default Header;