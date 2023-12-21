import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {BrowserRouter, Route, Link, Routes, useNavigate} from 'react-router-dom';
import AddForm from "./components/AddForm/AddForm";
import ContactsList from "./components/ContactsList/ContactsList";
import axios from "axios";
import './App.css';
import { setItem } from './store/itemSlice';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                const items = response.data;
                dispatch(setItem(items));
            } catch (error) {
                console.error('Error loading contacts:', error);
            }
        };

        fetchData();
    }, [dispatch]);

  return (
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
  )
}

export default App;