import { useLayoutEffect } from "react";

function useSetTitle(title: string) {
    useLayoutEffect(() => {
        document.title = `Adopet | ${title}`;
    }, []);
}
export default useSetTitle;