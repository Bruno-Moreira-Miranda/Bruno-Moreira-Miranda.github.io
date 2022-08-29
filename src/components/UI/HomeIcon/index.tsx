import iconPath from "assets/imagens/casa-icon.png";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

function HomeIcon({ className }: Props) {
    return (
        <img
            className={className}
            src={iconPath}
            alt="Home" />
    );
}
export default HomeIcon;