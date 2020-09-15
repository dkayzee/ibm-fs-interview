import React from "react";
import { hot } from "react-hot-loader/root";

import NewTask from "./components/NewTask";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <NewTask />
      </>
    );
  }
}

export default hot(App);
