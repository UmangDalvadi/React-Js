import React from 'react'

const Alert = (props) => {
    const capital = (text) => {
        return text[0].toUpperCase() + text.slice(1)
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container my-3 `} role="alert">
            <strong>{capital(props.alert.type)} : </strong>{props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}

export default Alert
