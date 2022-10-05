import React, { useEffect } from "react";
import { useState } from 'react';

function Category() {
    const [category, setCategory] = useState([]);

    const apiCategory = async () => {
        try{
            const uri = `http://localhost:3002/api/category`;
            const req = await fetch(uri);
            const res = await req.json();

            if (res.success) {
                setCategory(res.data);
            } else {
                setCategory([]);
            }
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        apiCategory();
    }, []);

    return(
        <React.Fragment>
            <div className="grid-container fluid content">
                <h3>Categorias</h3>
                <table>
                    <thead>
                        <tr>
                            <th width="200">#</th>
                            <th>Nombre de la categoría</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category.map((categoria, i) => {
                                // return <li key={i}><Link to={"/" + producto}>{producto}</Link></li>
                                return  <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{categoria.name}</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default Category;
