import { HTMLAttributes } from "react";
import classNames from "classnames";

import "styles/components/textInput.module.css";
import "styles/components/toggle.module.css";

//----- TEXT -----//
type StyleSets = "primario";

//----- TEXTINPUT -----//
type TextInputTypes = "text" | "email" | "password" | "url" | "search" | "num";

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
    type: TextInputTypes
    id: string
    labelText: string
    placeholder: string
    aparencia?: StyleSets
}

function TextInput({ className, aparencia, type, id, labelText, placeholder, ...rest }: TextInputProps) {

    type TextInputTypesAsProps = { type: TextInputTypes };

    function TypeImplementacao({ type }: TextInputTypesAsProps) {
        const implementacao = {
            text: () => null,
            email: () => null,
            password: () => (
                <Toggle
                    className="password__show"
                    id={`toggle-${id}`}
                    type="visibilidade"
                    title="Mostrar senha"
                />
            ),
            url: () => null,
            search: () => null,
            num: () => null
        };

        return implementacao[type]();
    }

    //placeholder "vazio" para fins de estilização
    return (
        <div className={classNames("inputText", aparencia, type, className)}>
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
            <TypeImplementacao type={type} />
        </div>
    );
}

//----- TEXTAREA -----//

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
    id: string
    labelText: string
    placeholder: string
    aparencia?: StyleSets
}

function Textarea({ className, aparencia, id, labelText, placeholder, ...rest }: TextareaProps) {
    //placeholder "vazio" para fins de estilização
    return (
        <div className={classNames("inputText", aparencia, "textarea", className)}>
            <label className="inputText_label" htmlFor={id}>
                {labelText}
            </label>
            <textarea
                className="inputText_input"
                id={id}
                placeholder=" "
                {...rest}>
            </textarea>
            <label className="inputText_placeholder" htmlFor={id}>
                {placeholder}
            </label>
        </div>
    );
}

//----- TOGGLE -----//

type ToggleTypes = "visibilidade";

interface ToggleProps extends HTMLAttributes<HTMLInputElement> {
    type: ToggleTypes
    id: string
}

function Toggle({ type, className, ...rest }: ToggleProps) {
    return (
        <input
            className={classNames(className, "toggle", type)}
            type="checkbox"
            {...rest} />
    );
}

export { TextInput, Textarea, Toggle };