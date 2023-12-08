import { connect } from 'react-redux';
import { deleteItem } from '../../actions';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.scss';
import { Link } from 'react-router-dom';

const ContactsList = ({ items, onDelete }) => {

    return (
        <div>
            <h2>Contacts Page</h2>
            <div className="btn-block">
                <Link to="/form" className="link-button">
                    Add Contact
                </Link>
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
                {items.map((item) => (
                    <ContactItem key={item.id} item={item} onDelete={onDelete} />
                ))}
            </table>
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.items,
});

const mapDispatchToProps = {
    onDelete: deleteItem,

};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);