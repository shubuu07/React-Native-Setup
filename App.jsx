import { Provider } from 'react-redux';
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { store } from './src/Redux/Store';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native';
import { injectStore } from './src/Utils/customAxios';
import Navigation from './src/Routes/Navigation';
import CustomToast from './src/Helper/CustomToast';
import { ToastProvider } from 'react-native-toast-notifications';
import { Hp } from './src/Constants/Theme';

const App = () => {
  injectStore(store);
  let persistor = persistStore(store);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ToastProvider
            placement="bottom"
            duration={3000}
            animationType='slide-in'
            animationDuration={250}
            offsetBottom={Hp(10)}
            swipeEnabled={true}
            renderToast={(toastOptions) => (
              <CustomToast message={toastOptions.message} type={toastOptions.type} />
            )}
          >
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <Navigation />
          </ToastProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App;