/* eslint-disable react/prop-types */
import classNames from "classnames";

import "styles/components/button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

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