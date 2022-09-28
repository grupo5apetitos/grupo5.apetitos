import React from "react";
import { Link, Routes, Route} from 'react-router-dom';
import Content from './Content';
import Products from "./Products";


function Category() {
    return(
        <React.Fragment>
            <h1> Categorias </h1>
            {/*<!-- SiderBar -->*/}
            <ul className="">
                <li>
                    <Link  className=""  to={'/visitado'}>
                        <span> Visitado </span>
                    </Link>
                </li>
                <li>
                    <Link className=""  to={'/masVisto'}>
                        <span> Lo mas visto </span>
                    </Link>
                </li>
                <li>
                    <Link className=""  to={'/masComprado'}>
                        <span> Mas comprado </span>
                    </Link>
                </li>
                <li>
                    <Link className=""  to={'/masPuntuado'}>
                        <span> Mas puntuado </span>
                    </Link>
                </li>
            </ul>
            {/*<!-- Categorias End -->*/}
            {/*<!-- Contenido -->*/}
                <Routes>
                    <Route exact path="/" element={<Content />} />
                    <Route  path="/visitado" element={<Products />} />
                    <Route  path="/masVisto" element={<Products />} />
                    <Route  path="/masComprado" element={<Products />} />
                    <Route  path="/masPuntuado" element={<Products />} />
                </Routes>
            {/*<!-- Contenido End -->*/}
        </React.Fragment>
    );
}

export default Category;
