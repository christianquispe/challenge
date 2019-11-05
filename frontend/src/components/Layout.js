import React from "react";

import Navigation from "../components/navigation";
import Footer from "../components/footer"

function Layout(props) {
    return (
        <React.Fragment>
            <Navigation />
            {props.children};
            <Footer />
        </React.Fragment>    
    );
}

export default Layout;