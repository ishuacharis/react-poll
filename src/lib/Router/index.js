import Home from '../components/Home/Home'
import User from '../components/User/User.jsx'
import Project from '../components/Project/Project.jsx';
import Testing from '../components/Testing/Testing.jsx'
import Gallery from '../components/Gallery/Gallery.jsx'
import Auth from '../components/Auth/Auth.jsx'
import Logout from 'lib/components/Logout/Logout';


const routes = [

  {
    path: "/testing",
    component: Testing
  },
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
    path: "/gallery",
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

//const router =  routes

export default routes;