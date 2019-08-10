import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
    const [outfits, setOutfits] = useState([]);

    useEffect(() => {
        Axios.get("/api/outfits")
        .then(result => setOutfits(result.data))
        .catch(err => console.error(err));
    }, []);

    return(
        <div className="container">
            <header>
                <h1>All Outfits</h1>
            </header>

            <div>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {outfits.map(outfit => (
                            <tr key={outfit._id}>
                                <td>
                                    <Link to={`/outfits/${outfit._id}`}>{outfit.name}</Link>
                                </td>
                                <td>
                                    <Link to={`/outfits/${outfit._id}/edit`}>Edit</Link> 
                                    |
                                    <Link to={`/outfits/${outfit._id}/destroy`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Index;