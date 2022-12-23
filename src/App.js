import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './Views/Home';
import About from './Views/About';
import Menu from './Views/Menu';
import Todo from './components/ApiDemo/Todo';
import ViewNotFound from './Views/ViewNotFound';
import Users from './Views/Users';
import UserDetails from './Views/UserDetails';
import UserLists from './Views/UserLists';


import Cart from './Redux/Cart/Cart';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
     <Provider store={store}>
         <Cart/>
     </Provider>
   
  );
}
export default App;



