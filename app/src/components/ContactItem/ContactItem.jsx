import ModalSection from "../Modal/Modal";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/itemSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactItem.scss';

export default function ContactItem({item} ) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(item.id));
    };

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


