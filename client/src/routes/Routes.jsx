import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import RoomDetails from '../pages/RoomDetails/RoomDetails';
import SignUp from '../pages/SIgnUp/SignUp';
import Main from './../layouts/Main'
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'signup',
    element: <SignUp></SignUp>
  },
  {
    path: 'dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: 'add-room',
        element: <p>Add room</p>
      }
    ]
  }
])

export default router;