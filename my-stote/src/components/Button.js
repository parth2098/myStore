import React from 'react'
import "./Button.css"

function Button(props) {
    return (
        <div className="button">
             <button className="btn btn-lg btn-primary btn-block" type="submit">{props.label}</button>
        </div>
    )
}

export default Button
