import Home from '../components/Home/Home'
import User from '../components/User/User.jsx'
import Project from '../components/Project/Project.jsx';
import Testing from '../components/Testing/Testing.jsx'
import Gallery from '../components/Gallery/Gallery.jsx'
import Auth from '../components/Auth/Auth.jsx'
import Logout from '../components/Logout/Logout';
import Notifications from '../components/Notifications/Notifications.jsx';
import Housemate from 'lib/components/Housemate/Housemate';
import House from 'lib/components/House/House';


const routes = [
 
  
  {
    path: "/housemates",
    protected: true,
    component: Project
  },
  {
    path: "/housemates/:id",
    protected: true,
    component: User
  },
  {
    path: "/testing",
    component: Testing
  },
  {
    path: "/notifications",
    protected: true,
    component: Notifications
  },
  {
    path: "/gallery",
    protected: true,
    component: Gallery
  },
  {
    path: "/auth",
    component: Auth
  },
  {
    path: "/logout",
    protected: true,
    component: Logout
  },


];


export default routes;

// {
//   path: "/project",
//   protected: true,
//   component: Project, 
//   routes:[
//     {
//       path: "/project/testing",
//       protected: true,
//       component: Testing
//     },
//     {
//       path: "/project/house",
//       protected: true,
//       component: House
//     },
   
//   ]
// },