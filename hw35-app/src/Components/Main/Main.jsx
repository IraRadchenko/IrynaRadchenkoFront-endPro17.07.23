import './Main.css';
import Menu from "./Menu/Menu";
import Container from "./Container/Container";

export default function Main() {
    return (
        <section className='main'>
            <Menu/>
            <Container/>
        </section>
    )
}