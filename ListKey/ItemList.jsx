import React from 'react'; // React 17 이전이라면 필요

const items = ['Apple', 'Banana', 'Cherry'];

function ItemList() {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ItemList;
