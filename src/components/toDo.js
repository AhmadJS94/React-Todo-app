import React from 'react';

function ToDo (props) {
    const styles = {
        color: "gray",
        textDecoration: 'line-through',
        fontStyle:'italic'
    }
    return (
<div className='todo-item'>
    <input type='checkbox' checked={props.content.completed}
     onChange={() => {
       return props.handleChange(props.content.id)
    }} />
    <p style= {props.content.completed ? styles : {}} >{props.content.text}</p> 
</div>

          )
}




export default ToDo 