import React from 'react';

const child = (props) => {
        return (
            <li>
                <span>name: {props.children}, age: {props.age} </span>
                <input onChange={props.changeEvent} value={props.children} />
                <button onClick={props.delEvent}>Delete</button>
            </li>
        )
}

export default child;