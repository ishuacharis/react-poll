import Home from '../components/Home/Home'
import User from '../components/User/User.jsx'
import Project from '../components/Project/Project';
import Testing from '../components/Testing/Testing'
import Gallery from '../components/Gallery/Gallery'
import NotFound from '../components/NotFound/NotFound'
import Auth from '../components/Auth/Auth'


const routes  = [

  {
    path: "/testing",
    component: Testing
  },
  {
    path: "/housemates",
    component: Project
  },
  {
    path: "/housemates/:id",
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


]


export default routes
