import React, {useState} from 'react'
import Table from './Table/Table';
import FuncArea from './FuncArea/FuncArea';
import axios from 'axios';

const MidLayerLocation = () => {
 
    const [allButtonPoints, setAllButtonPoints] = useState([]);
    const [AButtonpoint, setAButtonPoint] = useState({});
    const [BButtionpoint, setBButtonPoint] = useState({});
    const [CButtonpoint, setCButtonPoint] = useState({});
    
    const locateTarget = async () => {
      const response = await axios.get("http://localhost:8000/make_button_click");
      const [x, y] = response.data.coordinates;
    
      if (Object.keys(AButtonpoint).length === 0) {
        setAButtonPoint({"AButton Point": [x, y]});
        setAllButtonPoints([ {"AButton Point A": [x, y]} ])
      } else if (Object.keys(BButtionpoint).length === 0) {
        setBButtonPoint({"BButton Point": [x, y]});
        setAllButtonPoints((prevallPoints) => [...prevallPoints, {"BButtonPoint": [x,y]}])
      } else if (Object.keys(CButtonpoint).length === 0) {
        setCButtonPoint({"CButton Point": [x, y]});
        setAllButtonPoints((prevallPoints) => [...prevallPoints, {"CButtonPoint": [x,y]}])
      }
  
    };
    
    
    return (
      <div className="area-location" >
      <Table data={allButtonPoints}/>
      <FuncArea funcadd={locateTarget} />
    </div>
    )
  }

export default MidLayerLocation