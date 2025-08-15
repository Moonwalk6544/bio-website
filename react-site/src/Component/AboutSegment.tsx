import { useState } from "react";
import './About.css';
const listItems = [
    {
        text: "About Me"
    },
    {

        text: "My Work"
    },
    {

        text: "Contact"
    }
];




function ListAbout() {
    const [activeItem, setActiveItem] = useState('');
    return (
        <>

            <ul className="list-group">
                {listItems.map((item, index) => (
                    <li key={index} className={item.text === activeItem ? "list-group-item active" : "list-group-item"} onClick={() => setActiveItem(item.text)} > {item.text}</li>
                ))
                }
            </ul>
            {activeItem !== '' ? <div className="aboutBox">
                {activeItem && <p>You clicked on: {activeItem}</p>}
            </div> : null}
        </>
    );
}
export default ListAbout;
