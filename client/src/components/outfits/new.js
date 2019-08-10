import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

function New (){
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    function handleInputChange(event) {
        event.persist();
        const { name, value } = event.target;

        setInputs(inputs => {
            return {
                ...inputs,
                [name]: value
            };
        });
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        Axios.post("/api/outfits", {
            outfit: {
                name: inputs.name,
                top: inputs.top,
                bottom: inputs.bottoms,
                shoes: inputs.shoes
            }
        })
        .then(resp => setRedirect(true))
        .catch(err => console.log(err));
    }

    if(redirect) {return <Redirect to="/outfits" />}

    return(
        <div className="container">
            <header>
                <h1>New Outfit</h1>
            </header>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" name="name" required onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Top</label>
                        <select className="form-control" name="top" required onChange={handleInputChange}>
                            <option value="T-Shirt">T-Shirt</option>
                            <option value="Hoodie">Hoodie</option>
                            <option value="Jacket">Jacket</option>
                            <option value="Shirt">Shirt</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Bottom</label>
                        <select className="form-control" name="bottoms" required onChange={handleInputChange}>
                            <option value="Jean">Jean</option>
                            <option value="Pants">Pants</option>
                            <option value="Jogger">Jogger</option>
                            <option value="Shorts">Short</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Shoes</label>
                        <select className="form-control" name="shoes" required onChange={handleInputChange}>
                            <option value="Sneakers">Sneakers</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Sandals">Sandals</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-dark" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default New;