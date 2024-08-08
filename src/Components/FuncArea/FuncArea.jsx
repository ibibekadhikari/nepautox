import React from 'react'
import Button from '../Button/Button'


const FuncArea = (props) => {


  return (
    <div className='functions-area'>
        <Button onClick={props.funcadd} imgName="add" buttonName="ADD"/>
        <Button  onClick={props.funcedit} imgName="edit" buttonName="EDIT"/>
        <Button imgName="locate" buttonName="LOCATE"/>
    </div>
  )
}

export default FuncArea
