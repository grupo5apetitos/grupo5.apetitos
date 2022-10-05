import React, { useEffect, useState } from "react";

function Content() {
    const [total, setTotal] = useState();
    const [lastMeal, setMeals] = useState();
    const [categorys, setCategory] = useState();
    const [products, setProducts] = useState();

    const apiTotal = async () => {
        try {
            const uri = `http://localhost:3002/api/dashboard/total`;
            const req = await fetch(uri);
            const res = await req.json();

            if (res.meta.status == 200) {
                setTotal(res.data);
            } else {
                setTotal([]);
            }
        } catch(err) {
            console.error(err);
        }
    }

    const apiUltimoProducto = async () => {
        try {
            const uri = `http://localhost:3002/api/dashboard/ultimoProducto`;
            const req = await fetch(uri);
            const res = await req.json();

            if (res.meta.status == 200) {
                setMeals(res.data);
            } else {
                setMeals([]);
            }
        } catch(err) {
            console.error(err);
        }
    }

    const apiCategorias = async () => {
        try {
            const uri = `http://localhost:3002/api/dashboard/listaCategorias`;
            const req = await fetch(uri);
            const res = await req.json();

            if (res.meta.status == 200) {
                // console.log(res.data);
                setCategory(res.data);
            } else {
                setCategory([]);
            }
        } catch(err) {
            console.error(err);
        }
    }

    const apiProductos = async () => {
        try {
            const uri = `http://localhost:3002/api/dashboard/listaProductos`;
            const req = await fetch(uri);
            const res = await req.json();

            if (res.meta.status == 200) {
                console.log(res.data);
                setProducts(res.data);
            } else {
                setProducts([]);
            }
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        apiTotal();
    }, []);
/*
    useEffect(() => {
        apiUltimoProducto();
    }, [total]);

    useEffect(() => {
        apiCategorias();
        //apiProductos();
    }, [lastMeal]);*/

    return (
        <React.Fragment>
            <div className="grid-container fluid content">
                <div className="grid-x">
                    <div className="cell small-12 large-4">
                        <div className="callout warning">
                            <h5>Total de Productos</h5>
                            <p>{total.totalProductos} de productos.</p>
                        </div>
                    </div>
                    <div className="cell small-12 large-4">
                        <div className="callout warning">
                            <h5>Total de Usuarios</h5>
                            <p>{total.totalUsuarios} de usuarios.</p>
                        </div>
                    </div>
                    <div className="cell small-12 large-4">
                        <div className="callout warning">
                            <h5>Total de Categorías</h5>
                            <p>{total.totalCategorias} de categorias.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-x">
                    <div className="cell small-12 large-6">
                        <h3>Detalle del último producto</h3>
                        <div className="card">
                            <div className="card-divider">
                                <h4>Titulo</h4>
                            </div>
                            <img src="" alt="" />
                            <div className="card-section">
                                <p>Descripción</p>
                            </div>
                        </div>
                    </div>
                    <div className="cell small-12 large-6">
                        <h3>Categorías</h3>
                        <div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-4" data-equalizer data-equalize-by-row="true">
                            {/*
                                categorys.map((name, i) => {
                                    return <div className="cell callout" data-equalizer-watch><span key={i}>{name}</span></div>
                                })*/
                            }
                        </div>
                    </div>
                </div>
                <div className="grid-x">
                    <h3>Lista de Productos</h3>
                    <table>
                        <thead>
                            <tr>
                                <th width="200">Table Header</th>
                                <th>Table Header</th>
                                <th width="150">Table Header</th>
                                <th width="150">Table Header</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*
                                products.map((producto, i) => {
                                    let image = `http://localhost:3002/images/platillos/${producto.image}`;
                                    return <tr key={i}>
                                                <td>{producto.name}</td>
                                                <td>{producto.description}</td>
                                                <td>$ {producto.price}.00</td>
                                                <td><img src={image} alt="alimentos" /></td>
                                            </tr>
                                })*/
                            }
                            <tr>
                                <td>Content Goes Here</td>
                                <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
                                <td>Content Goes Here</td>
                                <td>Content Goes Here</td>
                            </tr>
                            <tr>
                                <td>Content Goes Here</td>
                                <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
                                <td>Content Goes Here</td>
                                <td>Content Goes Here</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Content;