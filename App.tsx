import React from "react";
import {Provider} from "react-redux";
import {store, useAppSelector} from "./store";
import GiveAHand from "./GiveAHand";


const App = () => {
  return (
    <Provider store={store}>
      <GiveAHand/>
    </Provider>
  )
};

export default App;