import React, {Component} from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            nom:'',
            prenom:'',
            email:'',
            password:'',
            statut:'',
            resultat:0
        }
        this.handleChangeNom=this.handelChangeNom.bind(this);
        this.handleChangePrenom=this.handelChangePrenom.bind(this);
        this.handleChangeEmail=this.handelChangeEmail.bind(this);
        this.handeChangePassword=this.handelChangePassword.bind(this);
        this.handeChangeStatut=this.handelChangeStatut.bind(this);

        this.handelChangeAdd=this.handeChangelAdd.bind(this);
    }

    handeChangeNom(event){
        this.setState({
            nom: event.target.value
        })
    }
    handeChangePrenom(event){
        this.setState({
            prenom: event.target.value
        })
    }
    handeChangePassword(event){
        this.setState({
            password: event.target.value
        })
    }
    handeChangeStatut(event){
        this.setState({
            status: event.target.value
        })
    }
    handeChangeAdd(event){
        event.preventDefault();
        const requestOptions={
            method:'POST',
            header:{'Content-Type':'application/json'},
            body:JSON.stringify({title:'React POST example'})
        };
        fetch("localhost/project-name/...password=passer&statut=0?nom="+this.state.nom+"&prenom="+this.state.prenom+"..."+this.state.statut,requestOptions)
            .then(result=>result.json())
            .then(result=>{
                this.setState({
                    nom:'',
                    prenom:'',
                    email:'',
                    password:'',
                    statut:'',
                    resultat:result
                })
            });
    }
    render() {
        return (
            <div className="col xl-6 col-lg-5">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-center">
                        <h6 className="m-0 font-weight-bold text-primary">Formulaire</h6>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handeChangeAdd}>
                            <div className="row">
                                <div className="form-group col-xl-6">
                                    <label className="control-label" htmlFor="nom">Nom</label>
                                    <input type="text"  name="nom" id="nom" className="form-control" value={this.state.nom} onChange={this.handeChangeNom}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-xl-6">
                                    <label className="control-label" htmlFor="nom">Prenom</label>
                                    <input type="text" name="prenom" id="prenom" className="form-control" value={this.state.prenom} onChange={this.handeChangePrenom}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-xl-6">
                                    <label className="control-label" htmlFor="nom">Email</label>
                                    <input type="text" name="email" id="email"  className="form-control" value={this.state.email} onChange={this.handeChangeEmail}/>
                                </div>
                            </div>


                            <div className="row">
                                <div className="form-group col-xl-6">
                                    <label className="control-label" htmlFor="nom">Password</label>
                                    <input type="password"  name="password" id="password" className="form-control" value={this.state.password} onChange={this.handeChangePassword}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-xl-6">
                                    <label className="control-label" htmlFor="nom">Statut</label>
                                    <input type="text"  name="statut" id="statut" className="form-control" value={this.state.statut} onChange={this.handeChangeStatut}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit"  name="envoyer" id="envoyer"  value="Envoyer" className="btn btn-success" />
                                <input type="reset"  name="annuler" id="annuler"  value="annuler" className="btn btn-warning" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditUser;