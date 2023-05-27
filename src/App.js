import React, { useState } from "react";
import Navbar from "./componant/Navbar";
import Body from "./componant/Body";
import Trains from "./componant/Trains";

const App = () => {
  const [channge, SetChange] = useState(true);
  const [From, SetFrom] = useState("");

  return (
    <>
      <Navbar />
      <Body SetFrom={SetFrom} channge={channge} SetChange={SetChange} />
      <Trains From={From} channge={channge} SetChange={SetChange} />
    </>
  );
};

export default App;
