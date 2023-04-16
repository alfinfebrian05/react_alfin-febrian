import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persist_store } from "./config/redux/store";
import RouterRoot from "./components/RouterRoot";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config/apollo";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist_store}>
          <div className="App">
            <RouterRoot />
          </div>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
