import React from 'react'
import Data from '../screens/Data';
const Title = ({name , email , phone}) => {
    const style = {
        width:'100%',
        color: 'blue',
        backgroundColor: 'lightgray'
      };
      const tablthead = {
        border:'1px solid blue',
      }
  return (
    <>
    <h1>{name}</h1>
    <h3>{email}</h3>
    <h5>{phone}</h5>
    <div>
        <table style={style}>
            <thead >
                <tr>
                    <th style={tablthead}>Name</th>
                    <th style={tablthead}>Class</th>
                    <th style={tablthead}>Subject</th>
                    <th style={tablthead}>Marks</th>
                </tr>
            </thead>
        <tbody>

        {Data.map((items)=>(
            <tr>
            <td  style={tablthead}>{items.name}</td>
            <td  style={tablthead}>{items.class}</td>
            <td  style={tablthead}>{items.Subject}</td>
            <td  style={tablthead}>{items.Marks}</td>
            </tr>
            )
            )};
        </tbody>
        </table>
    </div>
    </>
  )
}

export default Title