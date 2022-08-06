import { HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Logo.module.css";
import logoPath from "assets/imagens/logo.png";
import logoAzulPath from "assets/imagens/logo-azul.png";

interface Props extends HTMLAttributes<HTMLDivElement> {
    type?: "default" | "azul"
}

function Logo({ className, type, ...rest }: Props) {
    const types = {
        default: logoPath,
        azul: logoAzulPath
    };

    return (
        <img
            className={classNames(styles.logo, className)}
            src={type?types[type]:"default"}
            alt="Adopet" 
            {...rest} />
    );
}
export default Logo;