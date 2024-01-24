import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            counter:1,
            list:[0]
        }
    }
   compute=(op)=>{
        let sign=op==='+'?1:-1;
       // let c=this.state.counter+1;
       if(this.state.counter===1 && op==='-')sign=0;
       let c=this.state.counter+sign;
        this.setState({
            counter:c,
            list:new Array(c).fill(0)
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <strong>
                        {this.props.title?this.props.title:'Defaut title'}:{this.state.counter}
                    </strong>
                </div>
                <div className="ms-auto">
                    <button onClick={()=>this.compute('+')} className="btn btn-primary m-2">+</button>
                    <button onClick={()=>this.compute('-')} className="btn btn-danger m-2">-</button>
                </div>
                <div className="card-body">
                    {
                        this.state.list.map((v,index)=>
                            <span key={index}>
                                <img src={this.props.image?this.props.image:'images/channels4_profile.jpg'} width={100} alt=""/>
                            </span>
                        )
                    }
                </div>
            </div>
        )
    }
}


