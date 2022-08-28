import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: JSX.Element
}

function PageLayout({ children }: Props) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
export default PageLayout;