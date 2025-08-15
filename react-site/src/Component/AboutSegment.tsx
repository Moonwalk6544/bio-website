import { useState } from "react";
import './About.css';
import 'bootstrap/dist/css/bootstrap.css';
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
                <div className="container1">
                    <div className="row">
                        {listItems.map((item, index) => (

                            <div className="col">
                                <li key={index}
                                    className={item.text === activeItem ? "highlightedAB" : "list-group-item"}
                                    onClick={() => activeItem === item.text ? setActiveItem('') : setActiveItem(item.text)} >
                                    {item.text}
                                </li>

                            </div>
                        ))}
                    </div></div>
            </ul>
            {activeItem !== '' ? <div className="aboutBox">
                {activeItem && <p>You clicked on: {activeItem}</p>}
            </div> : null}
        </>
    );
}
export default ListAbout;
