import React from "react";
import { useState } from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import ProductEdit from './ProductEdit';


function Products() {

    const [ listadoDeProductos, setListadoDeProductos ] = useState([
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

    return(
        <React.Fragment>
            <div>
                <h2>Productos</h2>
                <ul>
                    {
                        listadoDeProductos.map((producto, i) => {
                            return <li key={i}><Link to={"/" + producto}>{producto}</Link></li>
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Products;





              
              
                   