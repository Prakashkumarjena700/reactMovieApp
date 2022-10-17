import React from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import {Them} from './Context/Them'

const styled={
  light:{
    color:'black',
    backgroundColor:'white'
  },
  dark:{
    color:'white',
    backgroundColor:'black'
  }
}

function App() {
  const{them, themChanger} =React.useContext(Them)
  

  return (
    <div className="App" style={them==='dark' ? styled.dark : styled.light} >
      <Navbar />
      <button className='them' onClick={themChanger} >{them=='dark' ? <img src='https://cdn4.iconfinder.com/data/icons/multimedia-flat-30px/30/sun_light_mode_day-512.png'/> : <img src='https://cdn-icons-png.flaticon.com/512/6714/6714978.png' />}</button>
      <AllRoutes />
    </div>
  );
}

export default App;
