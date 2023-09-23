import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:'45px'}} >
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.msg}</strong>
            </div>}
        </div>


    )
}
