import React from 'react'
import {useLocation} from 'react-router-dom'

function NotFound(){
  let location = useLocation()
  return (
    <div className = "not-found">
      Not Found Works {location.pathname}
      kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    </div>
  )
}


export default NotFound
