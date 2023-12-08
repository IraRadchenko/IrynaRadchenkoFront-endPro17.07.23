import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AddForm from './components/AddForm/AddForm';
import ContactsList from './components/ContactsList/ContactsList';
import './App.css';
import {useEffect} from "react";
import { setItems } from './actions';
function App() {

    useEffect(() => {
        // Завантаження списку контактів після монтажу компонента
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => store.dispatch(setItems(data)))
            .catch((error) => console.error('Error loading contacts:', error));
    }, []);
  return (
      <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
                path="/"
                element={<ContactsList/>}
                />
            <Route
                path="/form"
                element={<AddForm/>}
            />
          </Routes>
        </BrowserRouter>
      </div>
      </Provider>
  )
}

export default App;