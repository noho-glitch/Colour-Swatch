import React from "react";
import Palette from "./components/Palette/Palette";
import seedColors from "./utils/seedColors";
import { generatePalette } from "./utils/colorHelpers";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[1])} />
    </div>
  );
}

export default App;
