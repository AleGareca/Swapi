import React from 'react';
import './css/Buscar.css';
import Axios from 'axios';
import Form from './Form';


export default class Buscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || '',
      person:"",
      planet:"",
    };
    this.changeText = this.changeText.bind(this);
    this.getPerson= this.getPerson.bind(this);
    this.getPlanet= this.getPlanet.bind(this);
  }



  componentDidUpdate(){
    this.getPerson(this.state.text);
    
  }
  getPerson(id){
    return Axios.get(`https://swapi.co/api/people/ ${id}`)
    .then((response) => {
          console.log(response.data);
        
       


          /*var option= {
            name: response.data.name,
            height: response.data.height,
            hairColor: response.data.hair_color,
            ayeColor: response.data.aye_color,
            url: response.data.url,
            planet:this.state.planet,
          }*/



          this.setState({person:response.data})
         
    })
  }

  getPlanet(path){
    return Axios.get(path)
    .then((response) =>{
      console.log(response);
      this.setState({planet:response.name})
    })
  }

  changeText(event) {
    this.setState({ text: event.target.value });
    console.log(event.target.value);
    /*<button type="button" className="btn btn-primary" onClick={this.changeText} value={this.state.text}>Buscar</button>*/ 
  }
 

  render() {
    const {person}=this.state;
  
    return (
      <div className="addTODO">
        
        <div className="row">
          <div className="col-1 fix-possition text-right">
            
     
          </div>
          <div className="col-11">
            <textarea value={this.state.text} onChange={this.changeText} className="form-control" aria-label="With textarea" />
          </div>
        </div>
        <div className="buttonContainer text-right">
         
        </div>
        <Form person={person} />
      </div>
    );
  }
}
