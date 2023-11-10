import './Menu.css';

export default function Menu() {
    return (
        <div className='menu'>
            <h3 className='menu-title'>
                КАТАЛОГ
            </h3>
            <ul className='menu-list'>
                <li>Свічки</li>
                <li>Віск для свічок</li>
                <li>Барвники та лак</li>
                <li>Форми для свічок</li>
                <li>Інструменти</li>
            </ul>
        </div>
    );
}