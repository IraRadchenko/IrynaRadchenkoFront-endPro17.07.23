import './Block.css';
import Card from "./Card/Card";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

export default function Block() {
    return (
        <section className='card-menu'>
            <Card text='Циліндричні свічки' img={img1}/>
            <Card text='Декоративні свічки' img={img2}/>
            <Card text='Ароматичні свічки' img={img3}/>
        </section>
    )
}