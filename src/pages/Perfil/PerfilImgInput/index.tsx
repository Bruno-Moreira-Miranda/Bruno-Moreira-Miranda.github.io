import React, { ChangeEvent, MutableRefObject, useRef } from "react";
import classNames from "classnames";

import "styles/utils/invisivel.css";
import styles from "./PerfilImgInput.module.css";

interface OnImgSubmitEvent {
    file: Blob
}

interface Props {
    id: string
    className?: string
    imgPreview: string
    onImgSubmit: (event: OnImgSubmitEvent) => unknown
}

const PerfilImgInput = React.forwardRef((props: Props, innerRef: any) => {
    const {
        id,
        className,
        imgPreview,
        onImgSubmit
    } = props;

    const imgInputRef: MutableRefObject<HTMLInputElement> = innerRef || useRef({} as HTMLInputElement);

    async function handleImgSubmit(event: ChangeEvent) {
        const input = event.target as HTMLInputElement;
        const file = input.files![0];

        const imgSubmitEvent: OnImgSubmitEvent = { file };

        onImgSubmit(imgSubmitEvent);
    }

    return (
        <div className={classNames("perfil_img_input", className)}>
            <label className={styles.perfil_input_label} htmlFor={id}>
                Foto
            </label>
            <label className={styles.perfil_input_container} htmlFor={id}>
                <div className={styles.perfil_img_container}>
                    <img src={imgPreview} alt="Imagem de perfil" />
                </div>
                <input
                    data-imgurl=""
                    onChange={handleImgSubmit}
                    required={Boolean(!imgPreview)}
                    accept="image/png, image/jpg, imagem/jpeg"
                    ref={imgInputRef}
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
});

PerfilImgInput.displayName = "PerfilImgInput";
export default PerfilImgInput;
export type { OnImgSubmitEvent };