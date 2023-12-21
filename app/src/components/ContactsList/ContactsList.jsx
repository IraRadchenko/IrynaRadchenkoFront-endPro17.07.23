import ContactItem from "../ContactItem/ContactItem";
import { useSelector } from 'react-redux';
import './ContactList.scss'
import {Link} from "react-router-dom";

export default function ContactsList() {

    const items = useSelector((state) => state.items.items);

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
                {items.map(item => (<ContactItem key={item.id} item={item} />))}
           </table>
        </div>
    )
}
