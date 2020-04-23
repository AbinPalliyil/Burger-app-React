import React from "react";

import Aux from "../../hoc/Auxilary"

import Classes from "../Layout/Layout.module.css"



const Layout = (props) => (
    <Aux>

   
    <div className={Classes.Content}>Menubar</div>
    <main>
    {props.children}
    </main>
    </Aux>
)

export default Layout;