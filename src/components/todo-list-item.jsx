import React from "react";

const TodoListItem = ({ label, important = false }) => {

    const myStyle = {
        color: important ? 'red' : 'black'
    }

    return <span style={myStyle}>{ label }</span>
}

export default TodoListItem