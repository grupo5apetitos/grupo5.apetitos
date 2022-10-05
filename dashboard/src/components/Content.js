import React from "react";

function Content() {
    return (
        <React.Fragment>
            <div className="grid-container fluid content">
                <div className="grid-x">
                    <div className="cell small-12 large-4">
                        <div className="callout warning">
                            <h5>Total de Productos</h5>
                            <p> productos.</p>
                        </div>
                    </div>
                    <div className="cell small-12 large-4">
                        <div className="callout warning">
                            <h5>Total de Usuarios</h5>
                            <p> usuarios.</p>
                        </div>
                    </div>
                    <div className="cell small-12 large-4">
                        <div className="callout warning">
                            <h5>Total de Categorías</h5>
                            <p> categorias.</p>
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
                            <div className="cell callout" data-equalizer-watch>
                                <span>Categoría 01</span>
                            </div>
                            <div className="cell callout" data-equalizer-watch>
                                <span>Categoría 02</span>
                            </div>
                            <div className="cell callout" data-equalizer-watch>
                                <span>Categoría 03</span>
                            </div>
                            <div className="cell callout" data-equalizer-watch>
                                <span>Categoría 04</span>
                            </div>
                            <div className="cell callout" data-equalizer-watch>
                                <span>Categoría 01</span>
                            </div>
                            <div className="cell callout" data-equalizer-watch>
                                <span>Categoría 02</span>
                            </div>
                            <div className="cell callout" data-equalizer-watch>
                                <span>Categoría 03</span>
                            </div>
                            <div className="cell callout" data-equalizer-watch>
                                <span>Categoría 04</span>
                            </div>
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
                            <tr>
                                <td>Content Goes Here</td>
                                <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
                                <td>Content Goes Here</td>
                                <td>Content Goes Here</td>
                            </tr>
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