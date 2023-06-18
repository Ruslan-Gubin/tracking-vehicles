import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { Navigation, store } from './src/app';


export default function App() {

  return( 
  <Provider store={store}>
  <Navigation />
  <StatusBar style="auto" /> 
  </Provider>
  )
}

