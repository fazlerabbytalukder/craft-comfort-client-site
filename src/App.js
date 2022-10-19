import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
// import Footer from './pages/Shared/Footer/Footer';
// import Navigation from './pages/Shared/Navigation/Navigation';
import ProductDetails from './pages/Home/AllProducts/ProductDetails';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashBoardHome from './pages/Dashboard/DashboardHome/DashBoardHome';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AminRoute from './pages/Login/Login/AdminRoute/AminRoute';
import ManageAll from './pages/Dashboard/ManageAll/ManageAll';
import ManageAllProduct from './pages/Dashboard/ManageAllProduct/ManageAllProduct';
import AddProducts from './pages/Dashboard/AddProducts/AddProducts';
import CartReviews from './pages/Cart/CartReview/CartReviews';
import Checkout from './pages/Cart/Checkout/Checkout';
import { DataProvider } from './contexts/DataProvider';
import { useState } from 'react';

function App() {
  const [hitDb, setHitDb] = useState(0);
  const quantity = () => {
    setHitDb(hitDb + 1);
  }
  return (
    <div className='transition duration-500 font-poppins'>
      <DataProvider.Provider value={{quantity}}>
      <AuthProvider>
        <BrowserRouter>
          {/* <Navigation/> */}
          <Routes>
            <Route exact path='/' element={<Home hitDb={hitDb}></Home>} />
            <Route path='/home' element={<Home></Home>} />
            <Route path='/myorder' element={<PrivateRoute><MyOrder></MyOrder></PrivateRoute>}></Route>
            <Route path='/cartReview' element={<CartReviews></CartReviews>} />
            <Route path='/checkout' element={<PrivateRoute><Checkout></Checkout></PrivateRoute>} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
              <Route index element={<DashBoardHome></DashBoardHome>}></Route>
              <Route path='manageall' element={<AminRoute><ManageAll></ManageAll></AminRoute>}></Route>
              <Route path='makeadmin' element={<AminRoute><MakeAdmin></MakeAdmin></AminRoute>}></Route>
              <Route path='manageallproduct' element={<AminRoute><ManageAllProduct></ManageAllProduct></AminRoute>}></Route>
              <Route path='addproducts' element={<AminRoute><AddProducts></AddProducts></AminRoute>}></Route>
            </Route>
            <Route path='/furnitures/:furnitureId' element={<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>} />
            <Route path='/services' element={<PrivateRoute><Services></Services></PrivateRoute>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/register' element={<Register></Register>} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthProvider>
      </DataProvider.Provider>
    </div>
  );
}

export default App;
