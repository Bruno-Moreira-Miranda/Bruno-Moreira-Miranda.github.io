import React, { HTMLAttributes } from "react";
import classNames from "classnames";

import "styles/components/button.module.css";

type Props = HTMLAttributes<HTMLButtonElement>

function Button({ children, className, ...rest }: Props) {
    return (
        <button
            className={classNames("button", className)}
            {...rest} >
            {children}
        </button>
    );
}
export default Button;