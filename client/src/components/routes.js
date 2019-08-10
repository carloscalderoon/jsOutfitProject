import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import OutfitNew from "./outfits/new"
import OutfitIndex from "./outfits"
import OutfitShow from "./outfits/show"
import OutfitEdit from "./outfits/edit"
import OutfitDestroy from "./outfits/destroy"

import Register from "./sessions/register"
import Login from "./sessions/login"
import Logout from "./sessions/logout"


function Routes (){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/outfits/new" component={OutfitNew} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/outfits" component={OutfitIndex} />
            <Route exact path="/outfits/:id" component={OutfitShow} />
            <Route exact path="/outfits/:id/edit" component={OutfitEdit} />
            <Route exact path="/outfits/:id/destroy" component={OutfitDestroy} />
        </Switch>
    );
}

export default Routes;