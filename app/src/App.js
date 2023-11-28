import { useState, useEffect } from "react";
import './App.css';
import AddForm from "./components/AddForm/AddForm";
import ContactsList from "./components/ContactsList/ContactsList";

function App() {

    const [currentPage, setCurrentPage] = useState('contacts');
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

    const handleTaskAdd = (newItem) => {
        setItems([
            ...items,
            newItem,
        ]);
        setCurrentPage('contacts');
    }
    const handleCancel = () => {
        setCurrentPage('contacts');
    };

    return (

        <div>
            {currentPage === 'contacts' && (
                <div>
                    <h2>Contacts Page</h2>
                    <button className='AddFormBtn' onClick={() => setCurrentPage('add-contact')}>Add Contact</button>
                    <ContactsList items={items} onDelete={handleDelete}/>
                </div>
            )}

            {currentPage === 'add-contact' && (
                <AddForm  onAdd={handleTaskAdd} onCancel={handleCancel} />
            )}
        </div>
    )
}

export default App;
