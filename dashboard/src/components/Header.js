import React from "react";

function Header() {
    return(
        <React.Fragment>
            <div className="header">
                <div className="row">
                    <div className="column-2"></div>
                    <div className="column-2">
                        <label className="f-label"></label>
                        <span>Imagen</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;