import { HTMLAttributes } from "react";
import classNames from "classnames";

import "styles/components/textInput.module.css";
import "styles/components/toggle.module.css";

interface Props extends HTMLAttributes<HTMLInputElement> {
    type: "text" | "email" | "password" | "url" | "search";
    id: string
    labelText?: string
    placeholder?: string
}



function TextInput({ className, type, id, labelText, placeholder, ...rest }: Props) {
    const typeImplementacao = {
        text: () => null,
        email: () => null,
        password: () => <Toggle className="inputText_showText" id={`toggle-${id}`} type="visibilidade" title="Mostrar senha" />,
        url: () => null,
        search: () => null
    };

    const ImplemetacaoComponent = typeImplementacao[type];

    //placeholder "vazio" para fins de estilização
    return (
        <div className={classNames("inputText", className)}>
            <label className="inputText_label" htmlFor={id}>
                {labelText}
            </label>
            <input
                className="inputText_input"
                id={id} type={type}
                placeholder=" "
                {...rest}
            />
            <label className="inputText_placeholder" htmlFor={id}>
                {placeholder}
            </label>
            <ImplemetacaoComponent />
        </div>
    );
}

interface ToggleProps extends HTMLAttributes<HTMLInputElement> {
    type: "visibilidade",
    id: string
}

function Toggle({ type, className, ...rest }: ToggleProps) {
    return (
        <input
            className={classNames(className, "toggle", "visibilidade")}
            type="checkbox"
            {...rest} />
    );
}

export { TextInput, Toggle };