import { useLayoutEffect } from "react";

function useSetBodyClass(className: string) {
    useLayoutEffect(() => {
        document.body.classList.add(className);
        return () => {
            document.body.classList.remove(className);
        };
    });
}
export default useSetBodyClass;