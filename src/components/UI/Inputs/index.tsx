import { HTMLAttributes } from "react";
import classNames from "classnames";

import "styles/components/textInput.module.css";

interface Props extends HTMLAttributes<HTMLInputElement> {
    type: "text" | "email" | "password" | "url" | "search";
    id: string
    labelText?: string
    placeholder?: string
}

function TextInput({ className, type, id, labelText, placeholder, ...rest }: Props) {
    return (
        <div className={classNames("inputText" , className)}>
            <label className="inputText_label" htmlFor={id}>
                {labelText}
            </label>
            <label className="inputText_placeholder" htmlFor={id}>
                {placeholder}
            </label>
            <input className="inputText_input" id={id} type={type} {...rest} />
        </div>
    );
}

export { TextInput };