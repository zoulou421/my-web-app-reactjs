import React, {Component} from 'react'

export default class DeleteUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            listUsers:[]
        }
    }

    componentDidMount() {
        fetch("localhost/project-name/...action=delete?id="+this.props.match.params.id)
            .then(result=>result.json())
            .then(result=>{
                this.setState({
                    listUsers:result
                })
            });
    }
    render() {
        return (
            <div>DeleteUser</div>
        )
    }
}
