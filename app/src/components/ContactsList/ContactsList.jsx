import ContactItem from "../ContactItem/ContactItem";
import { useDispatch, useSelector } from 'react-redux';
import {deleteContact} from "../../store/itemSlice";
import './ContactList.scss'
import {Link} from "react-router-dom";

export default function ContactsList() {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.items.items);
    const handleDelete = (itemId) => {
        dispatch(deleteContact(itemId));
    };

    return (
        <div>
            <h2>Contacts Page</h2>
           <div className='btn-block'>
               <Link to='/form' className='link-button'>Add Contact</Link>
           </div>
           <table>
               <thead>
               <tr>
                   <th>NAME</th>
                   <th>USERNAME</th>
                   <th>PHONE</th>
                   <th>ACTION</th>
               </tr>
               </thead>
                {items.map(item => (<ContactItem key={item.id} item={item} onDelete={handleDelete}/>))}
           </table>
        </div>
    )
}
