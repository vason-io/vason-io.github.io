import React from 'react';

export default function TestComponent({children, color}) {
    return (
        <span
            style={{
                backgroundColor: color,
                borderRadius: '20px',
                color: '#fff',
                padding: '10px',
                cursor: 'pointer',
            }}
            onClick={() => {
                alert(`You clicked the color ${color} with label ${children}`)
            }}>
            {children}
        </span>
    );
};