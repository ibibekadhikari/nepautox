import React, {useState} from 'react'
import axios from 'axios';
import Table from './Table/Table';
import FuncArea from './FuncArea/FuncArea';
import RunProgram from './RunProgram/RunProgram';

const MidLayerArea = () => {

  const [allPoints, setAllPoints] = useState([]);
  const [pointA, setPointA] = useState({});
  const [pointB, setPointB] = useState({});
  const [pointC, setPointC] = useState({});
  const [pointD, setPointD] = useState({});
  
  const locateTarget = async () => {
    const response = await axios.get("http://localhost:8000/make_sine_wave");
    const [x, y] = response.data.coordinates;
  
    if (Object.keys(pointA).length === 0) {
      setPointA({"PointA": [x, y]});
      setAllPoints([ {"PointA": [x, y]} ])
    } else if (Object.keys(pointB).length === 0) {
      setPointB({"PointB": [x, y]});
      setAllPoints((prevallPoints) => [...prevallPoints, {"PointB": [x,y]}])
    } else if (Object.keys(pointC).length === 0) {
      setPointC({"PointC": [x, y]});
      setAllPoints((prevallPoints) => [...prevallPoints, {"PointC": [x,y]}])
    } else if (Object.keys(pointD).length === 0) {
      setPointD({"PointD": [x, y]});
      setAllPoints((prevallPoints) => [...prevallPoints, {"PointD": [x,y]}])
    }
  };

  const clearData = () => {
    console.log("CLEAclearRINGALRIGH")
    setPointA({});
    setPointB({});
    setPointC({});
    setPointD({});
    setAllPoints([]);
  }
  return (
    <div className="area-location" >
    <Table data={allPoints}/>
    <FuncArea funcadd={locateTarget} funcedit={clearData} />
    <RunProgram data={allPoints} />
  </div>
  )
}

export default MidLayerArea