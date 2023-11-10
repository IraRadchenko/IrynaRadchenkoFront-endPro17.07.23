import './Card.css';

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} alt="Photo"/>
            <p>{props.text}</p>
        </div>
    )
}