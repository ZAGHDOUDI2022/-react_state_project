import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ProfileCard from './components/ProfileCard';


class App extends React.Component {

  state = {
    Person: {
      fullName: "ZAGHDOUDI Mahdi",
      bio: "I really enjoy coding times",
      imgSrc: "https://assets-prd.ignimgs.com/2021/09/09/god-of-war-ragnarok-button-1631231879154.jpg",
      profession: "FullStuck JS"
    },
    shows: false,
    intervall:null,
    timer:0
  }

  toggleVisibility = () => {
    this.setState({
      shows: !this.state.shows
    })
  }

  render() {
    return (
      <div className="App">
        
        <h2 style={{ marginTop: "100px" }}>Welcome</h2>
        <Button style={{ marginTop: '20px' }} className='visibility-btn' onClick={this.toggleVisibility}>{this.state.shows ? "Hide profile" : "Show profile"} </Button>

        {this.state.shows ?
          (<div>
            <ProfileCard data={this.state.Person} />
          </div>
          ) : (<h6 style={{ marginTop: '20px' }}> Click on the button below to show my profile <i style={{color:'yellowgreen'}} className="fa-solid fa-face-laugh-wink fa-2x"></i></h6>
          )
        }
        <h6 style={{ marginTop: '20px', color:'green' }}>This component was mounted since <b>{this.state.timer}</b> seconds</h6>
      </div>  
    );
  }

  componentDidMount(){
    this.setState({
      intervall:setInterval(() => {
        this.setState({timer:this.state.timer +1});
      }, 1000)
    });
  }



}

export default App;