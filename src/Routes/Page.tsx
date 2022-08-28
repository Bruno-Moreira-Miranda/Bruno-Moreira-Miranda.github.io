import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import PageLayout from "pages/layout/PageLayout";
import AppRoutes from "./AppRoutes";


function Page() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <PageLayout>
            <AppRoutes />
        </PageLayout>
    );

}
export default Page;