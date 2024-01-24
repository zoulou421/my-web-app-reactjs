import React, {Component} from 'react'

export class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:"Curriculum vitae",
            contact:{name:"Bonevy BEBY",profile:"images/profile.jpg",email:"bonevybeby@gmail.com"},
            skills:[
                {id:1,skill:"Software engineering"},
                {id:2,skill:"Cloud Computing"},
                {id:3,skill:"Machine and Deep Learning"},
            ],
            skillValue:'default value',
        }
    }
    setSkill= (event)=> {
        this.setState({
            skillValue: event.target.value
        });
    }
    addSkill= (event)=> {
        event.preventDefault();
            let new_skill=
            {
              id:[...this.state.skills].pop().id+1,
              skill:this.state.skillValue
            }
            this.setState({skills:[...this.state.skills,new_skill]});
    }

    onDeleteSkill=(skill)=> {
        let index = this.state.skills.indexOf(skill);
        let listSkills = [...this.state.skills];
        listSkills.splice(index, 1);
        this.setState({skills: listSkills});
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <strong><label>{this.state.title}</label></strong>
                    </div>
                    <div className="row p-2">
                        <div className="col col-auto">
                            <img src={this.state.contact.profile} width={100}/>
                        </div>
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.contact.name}</li>
                                <li className="list-group-item">{this.state.contact.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card m-2">
                   <div className="card-header">Skills:{this.state.skillValue}</div>
                    <div className="card-body">
                            <form onSubmit={this.addSkill}>
                                <div className="row  g-2">
                                  <div className="col col-auto">
                                      <input type="text" name="skill" placeholder="New Skill" value={this.state.skillValue}
                                      onChange={this.setSkill}/>
                                  </div>
                                    <div className="col col-auto">
                                        <button className="btn btn-primary btn-sm" type="submit">add</button>
                                    </div>
                                </div>
                            </form>
                        <table className="table">

                            <tbody>
                            <tr>
                                <th>ID</th><th>Skill</th>
                            </tr>
                               {
                                this.state.skills.map((s,index)=>
                                    <tr key={index}>
                                        <td>{s.id}</td>
                                        <td>{s.skill}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>this.onDeleteSkill(s)}>x</button>
                                        </td>
                                    </tr>
                                )
                              }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
