import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persist_store } from "./config/redux/store";
import RouterRoot from "./components/RouterRoot";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist_store}>
        <div className="App">
          <RouterRoot />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
