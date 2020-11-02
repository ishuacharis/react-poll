import Home from '../components/Home'
import Project from '../components/Project/Project';
import User from '../components/User'
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
