import React  from 'react';
import SideNav from '../shared/SideNav/SideNav.jsx';
import './Project.scoped.css';

import Housemates from '../Housemates/Housemates.jsx';

function Project() {

  return (
    
      <div className="container">
        <div className="project">       
            <SideNav />  
            <Housemates />
        </div>
      </div>
    
  )

}


export default Project
