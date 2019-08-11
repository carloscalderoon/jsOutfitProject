import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { string } from "@oclif/parser/lib/flags";
import { ifStatement } from "babel-types";

function Show(props) {
    const [outfit, setOutfit] = useState([]);

    useEffect(() => {
        Axios.get(`/api/outfits/${props.match.params.id}`)
            .then(result => setOutfit(result.data))
            .catch(err => console.error(err));
    }, [props]);

    return (
        <div className="outfitShowBg">
            <div className="showContainerFixed container">
                <header className="outfitsLabel">
                    <h3>The outfit you choose is </h3> <h1>{outfit.name}</h1>
                </header>
                <div className="outfitsLabels">
                    <h3>The top for this outfit is: </h3>
                    {outfit.top}
                </div>
                <div className="outfitsLabels">
                    <h3>The bottom to use is: </h3>
                    {outfit.bottom}
                </div>
                <div className="outfitsLabels">
                    <h3>And finally the best shoes to use is: </h3>
                    {console.log(outfit.top)}
                    {outfit.top}
                </div>
            </div>
        </div>
    );



}

export default Show;