import React from 'react'
import "./Table.css";

const Table = (props) => {

  let empList = [1,2,3,4]

  const data = props.data;
  console.log(data)
  return (
    <div>
         <div className="table-section">
          <table>
            <thead>
              <tr>
                <th className="theader-name">Name</th>
                <th className="theader-location">Location</th>
              </tr>
            </thead>
            <tbody>
            { data && data.length > 0 ? (
              data.map( (items, index) => {
                const pointName = Object.keys(items)[0];
                return (
                  <tr key={index}>
                  <td>{pointName}</td>
                  <td>{items[pointName].join(', ')}</td>
                  </tr>
                 )})
              ) : (
              empList.map((item)=>{
               return ( <tr key={item}>
                <td></td>
                <td></td>
                </tr>
               )
              })
              )}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Table