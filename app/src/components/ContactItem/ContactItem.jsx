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
                    <input type='button' value='X'  onClick={handleDelete}/>
                </td>
            </tr>
        </tbody>
    )
}


