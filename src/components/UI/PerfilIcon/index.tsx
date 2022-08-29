import { HTMLAttributes } from "react";

import iconPath from "assets/imagens/perfil.png";

type Props = HTMLAttributes<HTMLDivElement>

function PerfilIcon({ className, ...rest }: Props) {
    return (
        <img
            className={className}
            src={iconPath}
            alt="Perfil"
            {...rest} />
    );
}
export default PerfilIcon;