import { HTMLAttributes } from "react";

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
            className={className}
            src={type ? types[type] : types["default"]}
            alt="Adopet"
            {...rest} />
    );
}
export default Logo;