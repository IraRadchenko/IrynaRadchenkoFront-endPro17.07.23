import './Header.css';
import logo from "../../images/logoWW.jpg";
import Nav from "./Nav/Nav";

export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <Nav/>
        </header>
    )
}