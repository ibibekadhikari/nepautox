import './App.css';
import Banner from './Components/Banner/Banner';
import MidLayerArea from './Components/MidLayerArea';
import MidLayerLocation from './Components/MidLayerLocation';
import Button from './Components/Button/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {


  return (
        <div className='root-container'>
        <Banner />
        <div className="features-section">
        {/* <div className="area-location"  >
          <Table />
          <FuncArea />
        </div> */}
        <MidLayerArea />
        <div className="point-location">
          <MidLayerLocation />
        </div>
        </div>
        </div>
  );
}

export default App;
