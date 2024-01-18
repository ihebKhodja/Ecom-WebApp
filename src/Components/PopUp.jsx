import React from 'react'
import '../styles/_Popup.scss'
const PopUp = ({message}) => {
  return (
    <div className='popup-container'>
        <p>{message}</p>

    </div>
  )
}

export default PopUp