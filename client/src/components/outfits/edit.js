import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/outfits/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post(
      "/api/outfits/update",
      {
        id: props.match.params.id,
        outfit: inputs
      })
      .then(resp => setRedirect(true))
      .catch(err => {console.error(err);});
  }

  function handleInputChange(event) {
    event.persist();
    const {name, value} = event.target;

    setInputs(inputs => {
        return{
        ...inputs,
        [name]: value
        };
        return inputs;
    });
  }

  if (redirect) return <Redirect to="/outfits" />;

  return (
    <div className="container">
      <header>
        <h1>Edit Outfit</h1>
      </header>
      <div>
      <form action="/outfits" method="POST" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" name="name" required onChange={handleInputChange} defaultValue={inputs.name}/>
            </div>
            <div className="form-group">
                <label>Top</label>
                <select className="form-control" name="top" required="requiered" onChange={handleInputChange} defaultValue={inputs.top}>
                    <option value="T-Shirt">T-Shirt</option>
                    <option value="Hoodie">Hoodie</option>
                    <option value="Jacket">Jacket</option>
                    <option value="Shirt">Shirt</option>
                </select>
            </div>
            <div className="form-group">
                <label>Bottom</label>
                <select className="form-control" name="bottoms" required="requiered" onChange={handleInputChange} defaultValue={inputs.bottoms}>
                    <option value="Jean">Jean</option>
                    <option value="Pants">Pants</option>
                    <option value="Jogger">Jogger</option>
                    <option value="Shorts">Short</option>
                </select>
            </div>
            <div className="form-group">
                <label>Shoes</label>
                <select className="form-control" name="shoes" required="requiered" onChange={handleInputChange} defaultValue={inputs.shoes}>
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

export default Edit;