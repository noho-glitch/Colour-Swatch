import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette/Palette";
import seedColors from "./utils/seedColors";
import { generatePalette } from "./utils/colorHelpers";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>INDIVIDUAL PALETTE</h1>}
      />
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[1])} />
    // </div>
  );
}

export default App;
