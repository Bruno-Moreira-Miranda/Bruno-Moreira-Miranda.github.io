import { HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Logo.module.css";
import logoImgPath from "assets/imagens/logo.png";

type Props = HTMLAttributes<HTMLDivElement>

function Logo({ className, ...rest }: Props) {
    return (
        <img
            className={classNames(styles.logo, className)}
            src={logoImgPath}
            alt="Adopet" 
            {...rest} />
    );
}
export default Logo;