import ModalSection from "../Modal/Modal";

import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactItem.scss';

export default function ContactItem({ item, onDelete} ) {

    const handleDelete = () => {
        onDelete(item.id);
    }
    return (
        <tbody>
        <tr>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.phone}</td>
            <td>
                <ModalSection onDelete={handleDelete}/>
            </td>
        </tr>
        </tbody>
    )
}