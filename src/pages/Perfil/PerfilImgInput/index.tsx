import { HTMLAttributes } from "react";

import testImg from "assets/imagens/perfil-test.png";

import "styles/utils/invisivel.css";
import styles from "./PerfilImgInput.module.css";

interface Props extends HTMLAttributes<HTMLInputElement> {
    id: string
}

function PerfilImgInput({ className, id, placeholder, ...rest }: Props) {
    return (
        <div className="perfil_img_input">
            <label className={styles.perfil_input_label} htmlFor={id}>
                Foto
            </label>
            <label className={styles.perfil_input_container} htmlFor={id}>
                <img src={testImg} alt="Imagem de perfil" />
                <input
                    className="invisivel_eye"
                    type="file"
                    id={id}
                />
            </label>

            <strong className={styles.perfil_input_texto}>
                Clique na foto para editar
            </strong>
        </div>
    );
}
export default PerfilImgInput;