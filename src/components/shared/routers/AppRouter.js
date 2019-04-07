//@Author Fabian Küffer 15-931-421


import React from "react";
import { BrowserRouter, Redirect, Route, Switch,withRouter } from "react-router-dom";
import { GameGuard } from "../routeProtectors/GameGuard";
import GameRouter from "./GameRouter";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import Home from "../../login/Home";
import Users from "../../login/Users";
import Settings from "../../login/Settings";
import ErrorPage from "../../shared/routers/Error";
import Game from "../../game/Game";
/**
 *
 * Main router of your application.
 * In the following class, different routes are rendered. In our case, there is a Login Route with matches the path "/login"
 * and another Router that matches the route "/game".
 * The main difference between these two routes is the following:
 * /login renders another component without any sub-route
 * /game renders a Router that contains other sub-routes that render in turn other react components
 * Documentation about routing in React: https://reacttraining.com/react-router/web/guides/quick-start
 */



class AppRouter extends React.Component {

    clearlocalStorage() {
        //function for testing
        //not in use right now, for clearing the localstoarge
        localStorage.removeItem("token");
        alert("cleared storage!");
    }

  render() {
      // this.clearlocalStorage();

      console.log(localStorage);
      return (


      <BrowserRouter>
        <Switch>
            <Route
              path="/game"
              render={() => (
                <GameGuard  >
                  <GameRouter  base={"/game"} />
                </GameGuard>
              )}
            />
            <Route
              path="/login"
              exact
              render={() => (
                <LoginGuard>
                  <Home />

                </LoginGuard>
              )}
            />
            <Route path="/" exact render={() => <Redirect to={"/login"} />} />
            <Route path="/users/" component={Users} />
            <Route path="/settings/" exact component={Settings}/>
            <Route component={ErrorPage} />

        </Switch>
      </BrowserRouter>
    );
  }
}
/*
* Don't forget to export your component!
 */
export default AppRouter;
