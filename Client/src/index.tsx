import React, { useContext, Suspense } from "react";
import ReactDOM from "react-dom";
import { mount, route } from "navi";
import { Router, View } from "react-navi";
import { withAuthentication } from "./api/authenticatedRoute";
import * as serviceWorker from "./serviceWorker";
import ErrorBoundary from "./utils/ErrorBoundary";

import ServicesApi from "./api/services";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import LandingPage from "./components/pages/LandingPage";

import Layout from "./components/pages/Layout"
import ScripDetails from "./components/pages/ScripDetails";
import { GlobalProvider } from "./context/GlobalContext";

import "./styles/index.scss";
const App = () => {
  const routes = mount({
    "/dashboard": withAuthentication(
      route({
        title: "Dashboard",
        view: <Dashboard />,
      })
    ),
    "/login": route({
      title: "Login Page",
      view: <Login />,
    }),

    "/": route({
      title: "Home",
      view: <LandingPage />,
    }),
 
  });

  return (
    <div className="application">
      {/* <Router
        routes={routes}
        context={{ token: localStorage.getItem("data_token_tookit") }}
      /> */}

<Router routes={routes} context={{ token: localStorage.getItem("data_token_tookit") }}>
    <Layout>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </Layout>
  </Router>,
    </div>
  );
};

export default App;
ServicesApi.init();
ReactDOM.render( <App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
console.log = console.warn = console.error = () => {};
serviceWorker.unregister();
