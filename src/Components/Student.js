import React from 'react'

const Student=({name,address,age})=> {

  return (
    <div className='lists'>{name}<br></br>{address}<br></br>{age}<br></br><hr></hr></div>
  )
}

export default Student