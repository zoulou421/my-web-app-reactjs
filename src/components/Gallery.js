import React, {Component} from 'react'
import Counter from "./Counter";

export default class Gallery extends Component {
    render() {
        return (
            <div className="mt-3">
                <Counter title="Profile" value={1} image="images/profile.jpg"  />
                <Counter title="Profile" value={1} image="images/profile.jpg"  />
            </div>
        )
    }
}
