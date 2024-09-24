import React from 'react'

const FinishScreen = ({dispatch,points,maxPossiblePoints}) => {
  return <div className='finish_screen'>
    <p>your score is : {points}/ {maxPossiblePoints}</p>
    <button className='btn' onClick={()=> dispatch({type:'restart'})}>Restart</button>
  </div>
  
}

export default FinishScreen