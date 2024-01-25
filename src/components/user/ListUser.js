import React, {Component} from 'react'

export default class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            listUsers:[]
        }
    }

    componentDidMount() {
        fetch("localhost/project-name/...password=passer&statut=0?nom="+this.state.nom+"&prenom="+this.state.prenom+"..."+this.state.statut)
            .then(result=>result.json())
            .then(result=>{
                this.setState({
                   listUsers:result
                })
            });
    }

    render() {
        return (
            <div className="container-fluid" style={{marginTop:50}}>
                <table className="table table-bordered table-striped">
                  <thead>
                     <tr>
                         <th>Identifiant</th>
                         <th>Nom</th>
                         <th>Prenom</th>
                         <th>Email</th>
                         <th>Statut</th>
                         <th>Action</th>
                         <th>Action</th>
                     </tr>
                  </thead>
                    <tbody>
                    {
                        this.state.listUsers.map(function(user){
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.nom}</td>
                                    <td>{user.prenom}</td>
                                    <td>{user.email}</td>
                                    <td>{user.statut}</td>
                                    <td><a href={"/user/get/"+user.id}>Edit</a></td>
                                    <td><a href={"/user/delete/"+user.id}>Delete</a></td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
