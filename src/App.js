import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Components/Details/Details';
import Blogs from './Components/Page/Blogs';
import Home from './Components/Page/Home';
import Login from './Components/Shared/Login/Login';
import SignUp from './Components/Shared/Login/SignUp';
import Navber from './Components/Shared/Navber/Navber';
import NoteFound from './Components/Shared/NoteFound';
import RequirAuth from './Components/Shared/RequirAuth/RequirAuth';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrder from './Components/Dashboard/MyOrder';
import AddReview from './Components/Dashboard/AddReview';
import MyProfile from './Components/Dashboard/MyProfile';
import Fotfolio from './Components/Review/Fotfolio/Fotfolio';
import Users from './Components/Dashboard/Users';
import AddProduct from './Components/Dashboard/AddProduct';
import ManageOrders from './Components/Dashboard/ManageOrders';
import RequirAdmin from './Components/Shared/RequirAdmin';

function App() {
  return (
    <div>

      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/fotfolio' element={<Fotfolio></Fotfolio>}></Route>
        <Route path='/details/:servicesId' element={
          <RequirAuth>
            <Details></Details>
          </RequirAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequirAuth>
            <Dashboard></Dashboard>
          </RequirAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>

          <Route path='users' element={<Users></Users>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageorder' element={<ManageOrders></ManageOrders>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/*' element={<NoteFound></NoteFound>}></Route>


      </Routes>
      <ToastContainer />


    </div>
  );
}

export default App;
