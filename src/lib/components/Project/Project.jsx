import React  from 'react';
import SideNav from '../shared/SideNav/SideNav.jsx';
import Housemates from '../Housemates/Housemates';
import './Project.scoped.css';
function Project() {


  return (
    <div className="container">
      <div className="project">
        <SideNav />
        <Housemates/>
      </div>
    </div>
  )

}


export default Project
