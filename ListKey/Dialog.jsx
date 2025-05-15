// Dialog.jsx
import React from 'react';

function FancyBorder(props) {
    return (
        <div style={{
            border: `4px solid ${props.color}`,
            padding: "16px",
            borderRadius: "8px",
            margin: "16px"
        }}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="dialog-title">
                {props.title}
            </h1>
            <p>
                {props.message}
            </p>
            {props.children} {/* 자식 요소들 (예: input, button) */}
        </FancyBorder>
    );
}

export default Dialog;
