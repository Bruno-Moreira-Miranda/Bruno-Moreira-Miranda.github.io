import classNames from "classnames";

import "styles/common/container.module.css";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={classNames(styles.footer, "container")}>
            <p>2022 - Desenvolvido Por Alura.</p>
        </footer>
    );
}
export default Footer;