import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import classNames from "classnames";

import "styles/components/text-input.module.css";

type NativeInputAttributes = InputHTMLAttributes<HTMLInputElement>;
type StyleSets = "primario";

//----- TEXTINPUT -----//
type TextInputTypes = "text" | "email" | "password" | "url" | "search" | "tel";

interface TextInputProps extends NativeInputAttributes  {
    type: TextInputTypes
    id: string
    labelText: string
    placeholder: string
    aparencia?: StyleSets
}

const UITextInput = React.forwardRef((props: TextInputProps, innerRef: any) => {

    const {
        className, aparencia, type,
        id, labelText, placeholder,
        ...rest
    } = props;

    //placeholder "vazio" para fins de estilização
    return (
        <div className={classNames("inputText", aparencia, type, className)}>
            <label className="inputText_label" htmlFor={id}>
                {labelText}
            </label>
            <input
                ref={innerRef}
                className="inputText_input"
                id={id}
                type={type}
                placeholder=" "
                {...rest}
            />
            <label className="inputText_placeholder" htmlFor={id}>
                {placeholder}
            </label>
        </div>
    );
});
UITextInput.displayName = "TextInput";

//----- TEXTAREA -----//
type NativeTextareaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;

interface TextareaProps extends NativeTextareaAttributes {
    id: string
    labelText: string
    placeholder: string
    aparencia?: StyleSets
}

const UITextarea = React.forwardRef((props: TextareaProps, innerRef: any) => {

    const {
        className, aparencia, id,
        labelText, placeholder, ...rest
    } = props;

    //placeholder "vazio" para fins de estilização
    return (
        <div className={classNames("inputText", aparencia, "textarea", className)}>
            <label className="inputText_label" htmlFor={id}>
                {labelText}
            </label>
            <textarea
                ref={innerRef}
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

});
UITextarea.displayName = "Textarea";

export { UITextInput, UITextarea };