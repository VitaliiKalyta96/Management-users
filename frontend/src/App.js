import React, { Component, Fragment } from "react";
import Home2 from "./components2/Home2";
import Home3 from "./components3/Home3";

// import Header2 from "./components2/Header2"
// import Header3 from "./components3/Header3";;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Home2 />
        <Home3 />
        {/*<Header2 />*/}
        {/*<Header3 />*/}
      </Fragment>
    );
  }
}

export default App;
