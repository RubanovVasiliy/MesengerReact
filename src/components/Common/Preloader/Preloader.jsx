import preloader from "../../../images/preloader.gif";
import React from "react";

function Preloader() {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader}
             alt="Preloader"
        />
    </div>
}

export default Preloader