import React from "react";
import { useState } from 'react';

function Products() {

    const [listadoDeProductos, setListadoDeProductos] = useState([
        "Camarones",
        "Pata y Muslo",
        "Tarta de Cebolla",
        "Vegetales Fritos",
        "Tempura de Verduras",
        "Ravioles con Bolognesa",
        "Salmon con Fideos",
        "Lasaña",
        "Tallarines con Crema",
        "Ensalada",
        "Caesar Salad",
        "Pizza con vegetales",
        "Pollo al Horno con Papas",
        "Tiramisu",
        "Tacos de asada"
    ]);

    return (
        <React.Fragment>
            <div className="grid-container fluid content">
                <h3>Productos</h3>
                <table>
                    <thead>
                        <tr>
                            <th width="200">#</th>
                            <th>Nombre del producto</th>
                            <th width="150">Descripción</th>
                            <th width="150">Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listadoDeProductos.map((producto, i) => {
                                // return <li key={i}><Link to={"/" + producto}>{producto}</Link></li>
                                return  <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{producto}</td>
                                            <td>Descripción</td>
                                            <td><img src="" alt=""/></td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default Products;