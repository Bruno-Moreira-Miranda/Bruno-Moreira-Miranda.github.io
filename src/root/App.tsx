import { UserIDContext } from "context/user-context";
import Page from "Routes/Page";

function App() {
    return (
        <UserIDContext>
            <Page />
        </UserIDContext>
    );
}
export default App;