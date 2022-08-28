import { HTMLAttributes } from "react";

import iconPath from "assets/imagens/mensagens-icon.png";

type Props = HTMLAttributes<HTMLDivElement>

function MensagemIcon({ className, ...rest }: Props) {
    return (
        <img
            className={className}
            src={iconPath}
            alt="Mensagem"
            {...rest} />
    );
}
export default MensagemIcon;