import React,{Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './nvb.js' ;
import Body from './bd.js' ;
import About from './abt.js' ;
import Location from './locate.js' ;
import Contact from './ct.js' ;
import Footer from './ftr' ;
import Register from './rg.js' ;
const particlesop = {
  particles: {
    number: {
      value : 100,
      density :{
        enable: true,
        value_area: 800
      }

    } 
  }
}

class App extends Component {
  constructor(){
    super() ;
    this.state = {
      route:'home'
    } ;
  }
  onRouteChange = (route)=>{
    this.setState({route:route}) ;
  }
  render(){
  return (
    <div className="App">
      <Particles className="part" 
                params={particlesop} />
      {this.state.route ==='Register'?<Register />
      :(
        <div>
      <Navbar />
      <Body onRouteChange={this.onRouteChange}/>
      <About />
      <Location />
      <Contact />
      </div>
      )
      }
      <Footer />
    </div>
  );
  }
}

export default App;
