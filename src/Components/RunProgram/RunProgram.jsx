import React from 'react'
import Button from '../Button/Button'
import axios from 'axios';


const RunProgram = (props) => {

  const allpoints = props.data;

  const handleRun = async () => {
    try {
      await axios.post("http://localhost:8000/main_run", {
        data: allpoints
      });
      console.log("POST request sent successfully");
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  return (
    <div style={{position: "fixed", bottom: 15, left: '35%'}}>
        <Button onClick={handleRun} buttonName="RUN"/>
    </div>
  )
}

export default RunProgram