import React from "react";
import { Link, Routes, Route } from 'react-router-dom';
import Category from "./Category";
import Content from './Content';
import Products from "./Products";
import Users from "./Users";

import logo from "../assets/images/apetitos_delivery.png";

function SiderBar() {
    return(
        <React.Fragment>
            {/*<!-- SiderBar -->*/}
            <div className="siderbar">
                <div className="logo">
                    <img className="logo" src={logo} />
                </div>
                <hr/>
                <nav>
                    <ul className="">
                        <li>
                            <Link className="" to="/">
                                <span>Contenido</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/products">
                                <span>Productos</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/users">
                                <span>Usuarios</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/category">
                                <span>Categorias</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/*<!-- SiderBar End -->*/}
            {/*<!-- Contenido -->*/}
            <Routes>
                <Route exact path="/" element={<Content />} />
                <Route path="/products" element={<Products />} />
                <Route path="/users" element={<Users />} />
                <Route path="/category" element={<Category />} />
            </Routes>
            {/*<!-- Contenido End -->*/}
        </React.Fragment>
    );
}

export default SiderBar;