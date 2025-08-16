import { useState } from 'react';
import './About.css';
import gsap from 'gsap';
function gsapClick(moved: boolean) {
    moved ? gsap.to('.logo', { rotation: 0, duration: .5 }) : gsap.to('.logo', { rotation: 360, duration: .5 });
}
function Imager() {
    const [moved, setMove] = useState(false);

    return (
        <>
            <img src="/accurate.png" className='logo' onClick={() => { setMove(!moved); gsapClick(moved) }} />
            {/* <a>{moved ? 'Moved' : 'Not Moved'}</a> */}

        </>
    );
}
export default Imager;
