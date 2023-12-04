import { useState, useEffect } from "react";
import {BrowserRouter, Route, Link, Routes, useNavigate} from 'react-router-dom';

import './App.css';
import AddForm from "./components/AddForm/AddForm";
import ContactsList from "./components/ContactsList/ContactsList";

function App() {

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setItems(data))

        .catch(error => console.error('Error loading contacts:', error));
  }, [])

  const handleDelete = (itemKey) => {
    const newItems = items.filter(item => item.id !== itemKey)
    setItems(newItems);
  };

  const handleTaskAdd = (newItem ) => {
    setItems([
      ...items,
      newItem,
    ]);
  }
  const handleCancel = () => {

  };

  return (
          <div>
              <BrowserRouter>
                   <Routes>
                        <Route
                          path="/"
                          element={<ContactsList items={items} onDelete={handleDelete} />}
                        />
                        <Route
                           path="/form"
                           element={<AddForm onAdd={handleTaskAdd} onCancel={handleCancel} />}
                         />
                         </Routes>
              </BrowserRouter>
           </div>
  )
}

export default App;