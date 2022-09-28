import React from "react";
import { Link } from 'react-router-dom';

function Products() {
    return(
        <React.Fragment>
            <h1> Productos </h1>
            {/*<!-- Categorias -->*/}
            <ul>
                <li>
                    <Link className="" to={'/visitado'}> 
                        <span> Camarones </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Pata y Muslo </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Tarta de Cebolla </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Vegetales Fritos </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Tempura de Verduras  </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Ravioles con Bolognesa </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Salmon con Fideos </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Lasaña </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Tallarines con Crema </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Ensalada </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Caesar Salad </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Pizza con Vegetales </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Pollo al Horno con Papas </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Tiramisu </span>
                    </Link>
                </li>
                <li>
                    <Link className="" to={'/'}> 
                        <span> Tacos de asada </span>
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Products;