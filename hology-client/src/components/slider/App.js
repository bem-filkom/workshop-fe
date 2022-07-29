import React from "react";

import Carousel from "react-elastic-carousel";
import Item from "./item.js";
import "./App.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function App() {
  return (
    <>

      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src="../../src"></img>
          </Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>

        </Carousel>
      </div>
    </>
  );
}

export default App;