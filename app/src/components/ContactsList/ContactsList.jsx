import ContactItem from "../ContactItem/ContactItem";
import './ContactList.scss'
export default function ContactsList( { items, onDelete}) {
    return (
        <div>
           <table>
               <thead>
               <tr>
                   <th>NAME</th>
                   <th>USERNAME</th>
                   <th>PHONE</th>
                   <th>ACTION</th>
               </tr>
               </thead>
                {items.map(item => (<ContactItem key={item.id} item={item} onDelete={onDelete} />))}
           </table>
        </div>
    )
}
