import './App.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router'
import indexRouter from './router';
import store from './store/store.js'


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={indexRouter} />
    </Provider>
  );
}

export default App;
