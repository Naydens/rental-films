import React, { useState, useEffect } from 'react';
import "./ButtonToUp.css";

export default function ButtonToUp(props) {
    const [hidden, setHidden] = useState(true);

    const onClick = () => {
        // add animation to scroll
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > props.breakpoint) {
                setHidden(false);
            } else {
                setHidden(true);
            }
        });
    }, []);

    return(
        (hidden) ? null : <button className="button-to-up" onClick={onClick}>UP</button>
    );
}