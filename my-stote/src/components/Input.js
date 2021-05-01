import React from 'react'
import "./Input.css"
function Input(props) {
    return (
        <div className="input">
            <input type={props.type} id={props.id} className="form-control" placeholder={props.placeHolder}/>
        </div>
    )
}

export default Input
