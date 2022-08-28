import { HTMLAttributes } from "react";

import iconPath from "assets/imagens/nao-visivel-icon.png";

type Props = HTMLAttributes<HTMLDivElement>;

function NaoVisivelIcon({ className, ...rest }: Props) {
    return (
        <img
            className={className}
            src={iconPath}
            alt="Não visivel" 
            {...rest}/>
    );
}
export default NaoVisivelIcon;