import React from 'react';

function footer(){
    const Year=new Date();
    const yr=Year.getFullYear();
    return (
        <footer>
    <p>
        copyright © {yr}
    </p>
    </footer>);
}

export default footer;