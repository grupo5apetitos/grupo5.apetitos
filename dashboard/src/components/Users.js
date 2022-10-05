import React, { useEffect } from "react";
import { useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    const apiUsers = async () => {
        try {
            const uri = `http://localhost:3002/api/users`;
            const req = await fetch(uri);
            const res = await req.json();

            if (res.meta.status == 200) {
                setUsers(res.data);
            } else {
                setUsers([]);
            }
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        apiUsers();
    }, []);

    return(
        <React.Fragment>
            <div className="grid-container fluid content">
                <h3>Usuarios</h3>
                <table>
                    <thead>
                        <tr>
                            <th width="200">#</th>
                            <th>Nombre del Usuario</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((usuario, i) => {
                                let image = `http://localhost:3002/images/avatars/${usuario.avatar}`;
                                return  <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{usuario.user_name}</td>
                                            <td>{usuario.name}</td>
                                            <td>{usuario.email}</td>
                                            <td width={100}><img src={image} alt="usuarios"/></td>
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