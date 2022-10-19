import React from 'react';

function Heading({ title, desc }) {
    return (
        <div>
            <div className="heading">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Heading;