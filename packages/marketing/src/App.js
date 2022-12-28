import React from "react";
import {Switch, Route, BrowserRouter, Router} from "react-router-dom";
import {createGenerateClassName,StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

// const generateClassName = createGenerateClassName({
//     productionPrefix: 'ma',
//   });

export default () => {
    return (
        <div>
          <StylesProvider>
            <BrowserRouter>
              <Switch>
                <Route exact path="/pricing" component={Pricing} />
                <Route path="/" component={Landing} />
              </Switch>
            </BrowserRouter>
          </StylesProvider>
        </div>
      );
}