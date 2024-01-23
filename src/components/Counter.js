import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Counter(props) {
    return (
        <div className="card">
            <div className="card-header">
                <strong>
                    {props.title}:{props.value}
                </strong>
            </div>
            <div className="card-body">
                <img src={props.image} width={100}/>
            </div>


        </div>
    )
}


