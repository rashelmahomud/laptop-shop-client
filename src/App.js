import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Components/Details/Details";
import Home from "./Components/Page/Home";
import Login from "./Components/Shared/Login/Login";
import SignUp from "./Components/Shared/Login/SignUp";
import Navber from "./Components/Shared/Navber/Navber";
import NoteFound from "./Components/Shared/NoteFound";
import RequirAuth from "./Components/Shared/RequirAuth/RequirAuth";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyOrder from "./Components/Dashboard/MyOrder";
import AddReview from "./Components/Dashboard/AddReview";
import MyProfile from "./Components/Dashboard/MyProfile";
import Fotfolio from "./Components/Review/Fotfolio/Fotfolio";
import Users from "./Components/Dashboard/Users";
import AddProduct from "./Components/Dashboard/AddProduct";
import ManageOrders from "./Components/Dashboard/ManageOrders";
import RequirAdmin from "./Components/Shared/RequirAdmin";
import Payment from "./Components/Dashboard/Payment";
import Services from "./Components/Page/AllProduct/Services";
import Blogs from "./Components/Page/ServiceAll/blog/Blogs";
import BlogsDetails from "./Components/Page/ServiceAll/blog/BlogsDetails";
import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState(false);


  useEffect(() => {

    const theme = localStorage.getItem("dark");
    
    if (theme === "dark") setDark(!dark)

  }, [dark]);

  const handleThemeChange = () => {
    setDark(!dark);
    window.localStorage.setItem("dark", !dark)
  }




  return (
  
      <div data-theme={dark && "my_dark"}> 

       <Navber handleThemeChange={handleThemeChange} dark={dark}></Navber> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service" element={<Services />}></Route>

        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route
          path="/detailsblogs/:blogId"
          element={<BlogsDetails />}
        ></Route>
        <Route path="/fotfolio" element={<Fotfolio />}></Route>
        <Route
          path="/details/:servicesId"
          element={
            <RequirAuth>
              <Details />
            </RequirAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequirAuth>
              <Dashboard />
            </RequirAuth>
          }
        >
          <Route index element={<MyOrder />}></Route>
          <Route
            path="/dashboard/review"
            element={<AddReview />}
          ></Route>
          <Route
            path="/dashboard/profile"
            element={<MyProfile />}
          ></Route>
          <Route
            path="/dashboard/payment/:id"
            element={<Payment />}
          ></Route>

          <Route
            path="/dashboard/users"
            element={
              <RequirAdmin>
                <Users />
              </RequirAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/addproduct"
            element={
              <RequirAdmin>
                <AddProduct />
              </RequirAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/manageorder"
            element={
              <RequirAdmin>
                <ManageOrders />
              </RequirAdmin>
            }
          ></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/*" element={<NoteFound />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
