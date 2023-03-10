import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";
// Mount function

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDom.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

// if we are in development or isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    // only in dev use browser history
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// we are running through container
// and we should export the mount function
export { mount };
