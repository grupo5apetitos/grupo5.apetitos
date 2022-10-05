import React from "react";

function Header() {
    return(
        <React.Fragment>
            <div className="header">
                <div className="grid-x">
                    <div className="cell small-12 large-8"></div>
                    <div className="cell small-12 large-4">
                        <div className="user">
                            <i className="fas fa-user"></i>
                            <label className="label-admin">Administrador</label>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;