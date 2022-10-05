import React, { useEffect } from "react";
import { useState } from 'react';

function Products() {
    const [products, setProducts] = useState([]);

    const apiProduct = async () => {
        try {
            const uri = `http://localhost:3002/api/products`;
            const req = await fetch(uri);
            const res = await req.json();

            if (res.success) {
                setProducts(res.data);
            } else {
                setProducts([]);
            }
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        apiProduct();
    }, []);

    return (
        <React.Fragment>
            <div className="grid-container fluid content">
                <h3>Productos</h3>
                <table id="productos">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del producto</th>
                            <th width="700">Descripción</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((producto, i) => {
                                // return <li key={i}><Link to={"/" + producto}>{producto}</Link></li>
                                let image = `http://localhost:3002/images/platillos/${producto.image}`;
                                return  <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{producto.name}</td>
                                            <td>{producto.description}</td>
                                            <td>$ {producto.price}.00</td>
                                            <td width={"100"}><img src={image} alt="alimentos"/></td>
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