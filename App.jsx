import { Provider } from 'react-redux';
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { store } from './src/Redux/Store';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native';
import { injectStore } from './src/Utils/customAxios';
import Navigation from './src/Routes/Navigation';

const App = () => {
  injectStore(store);
  let persistor = persistStore(store);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <Navigation />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App;