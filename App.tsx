import React from "react";
import {Provider} from "react-redux";
import {store, useAppSelector} from "./store";
import GiveAHand from "./GiveAHand";
import {NativeBaseProvider} from "native-base";


const App = () => {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <GiveAHand/>
      </Provider>
    </NativeBaseProvider>
  )
};

export default App;