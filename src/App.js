import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TypeSection from "./components/TypeSection";
import Works from "./components/Works";
import Reg from "./components/reg";
import Footer from "./components/footer";
import { Fragment } from "react";

function App() {
    return (
        <Fragment>
            <Navbar />,
            <Header />,
            <TypeSection />,
            <Works />,
            <Reg />,
            <Footer />
        </Fragment>
    )
}

export default App;