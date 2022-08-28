import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

import "styles/components/button.module.css";

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function UIButton({ children, className, ...rest }: NativeButtonProps) {
    return (
        <button
            className={classNames("button", className)}
            {...rest} >
            {children}
        </button>
    );
}

export { UIButton };