import { Fragment } from "react";
import GlobalStyle from "./styles/globalStyle";
import { Forms } from "./components/Forms/Forms";

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <Forms />
        </Fragment>
    )
}

export default App;