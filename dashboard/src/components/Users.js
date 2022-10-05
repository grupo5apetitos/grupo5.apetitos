import React from "react";
import { useState } from 'react';

function Users() {
    const [listadoDeUsuarios, setListadoDeUsuarios] = useState([
        "Desayuno Ligero",
        "Desayuno Completo",
        "Comida Ligera",
        "Comida Completa",
        "Postres",
        "Aperitivos"
    ]);

    return(
        <React.Fragment>
            <div className="grid-container fluid content">
                <h3>Usuarios</h3>
                <table>
                    <thead>
                        <tr>
                            <th width="200">#</th>
                            <th>Nombre de la categoría</th>
                            <th>Tipo de usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listadoDeUsuarios.map((usuario, i) => {
                                // return <li key={i}><Link to={"/" + producto}>{producto}</Link></li>
                                return  <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{usuario}</td>
                                            <td>Tipo</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default Users;