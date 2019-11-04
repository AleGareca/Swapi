import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      name:  '',
      gender: '',
      height: '',
      hairColor: '',
      eyeColor: '',
      url: '',
      planet:'',
      numPerson: '',
    };
    this.changeName = this.changeName.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.changeHeight=this.changeHeight.bind(this);
    this.changeHairColor = this.changeHairColor.bind(this);
    this.changeEyeColor = this.changeEyeColor.bind(this);
    this.changeURL = this.changeURL.bind(this);
    this.changePlanet = this.changePlanet.bind(this);
    this.changeNumPerson = this.changeNumPerson.bind(this);
   // this.descriptionPerson=this.descriptionPerson.bind(this);

    this.executeSignUp = this.executeSignUp.bind(this);
  }

  changeName(event) {
    this.setState({ name: event.target.value });
  }

  changeGender(event) {
    this.setState({ gender: event.target.value });
  }
  changeHeight(event) {
    this.setState({ height: event.target.value });
  }

  changeHairColor(event) {
    this.setState({ hairColor: event.target.value });
  }
  changeEyeColor(event) {
    this.setState({ eyeColor: event.target.value });
  }
  changeURL(event) {
    this.setState({ url: event.target.value });
  }
  changeNumPerson(event) {
    this.setState({ numPerson: event.target.value });
  }
  changePlanet(event) {
    this.setState({ planet: event.target.value });
  }

  executeSignUp() {
    const body = {
      name: this.state.name,
      gender: this.state.gender,
      height: this.state.height,
      hairColor: this.state.hairColor,
      eyeColor: this.state.eyeColor,
      url: this.state.hairColor,
      planet: this.state.planet,
      numPerson: this.state.numPerson,
    };
    console.log(body);
  }

  /*descriptionPerson(data){
    this.setState({name:data.name});
    this.setState({gender:data.gender});
    this.setState({height:data.height});
    this.setState({hairColor:data.hairColor});
    this.setState({eyeColor:data.eyeColor});
    this.setState({url:data.url});
    this.setState({planet:data.homeworld});
    
  

  }*/

  renderInput(label, value, inputType, onChange) {
    return (
      <div className="form-group row">
        <label className="col-sm-4 col-form-label">{label}</label>
        <div className="col-sm-8">
          <input type={inputType} className="form-control" value={value} onChange={onChange} />
        </div>
      </div>
    );
  }

  render() {
    const person = this.props.person;






    return (
      
      <div className="container">
        
        <div className="row centerRow">
          <div className="col-3" />
          <div className="col-6 card newCard">
            <div className="card-body">
              {this.renderInput('Nombre', person.name, 'text', this.changeName)}
              {this.renderInput('Altura', person.height, 'text', this.changeHeight)}
              {this.renderInput('Color de cabello', person.hair_color, 'text', this.changeHairColor)}
              {this.renderInput('Color de ojos', person.eye_color, 'text', this.changeEyeColor)}
              {this.renderInput('URL', person.url, 'text', this.changeURL)}
              {this.renderInput('Planeta', person.homeworld, 'text', this.changePlanet)}
              {this.renderInput('Numero de Personaje', this.state.numPerson, 'text', this.changeNumPerson)}
              
            
              <div className="col-12">
                <button type="button" className="btn btn-primary btn-block" onClick={this.executeSignUp}>Agregar</button>
              </div>
              <div className="col-12">
               
              </div>
              <div className="col-12 empty">
                {this.state.error && this.state.error}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
 }       