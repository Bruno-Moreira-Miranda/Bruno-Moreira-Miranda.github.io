import { HTMLAttributes } from "react";

import mensagemsIconPath from "assets/imagens/mensagens-icon.png";

type Props = HTMLAttributes<HTMLDivElement>

function MensagemIcon({ className, ...rest }: Props) {
    return (
        <img
            className={className}
            src={mensagemsIconPath}
            alt=""
            {...rest} />
    );
}
export default MensagemIcon;