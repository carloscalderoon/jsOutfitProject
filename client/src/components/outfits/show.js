import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Show(props) {
    const [outfit, setOutfit] = useState([]);

    useEffect(() => {
        Axios.get(`/api/outfits/${props.match.params.id}`)
        .then(result => setOutfit(result.data))
        .catch(err => console.error(err));
    }, [props]);

    return(
        <div className="container">
            <header>
                <h1>{outfit.name}</h1>
            </header>
            <div>
                {outfit.top}
            </div>
            <div>
                {outfit.bottom}
            </div>
            <div>
                {outfit.shoes}
            </div>
        </div>
    );
}

export default Show;